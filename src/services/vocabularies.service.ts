import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVocabularyDto } from 'src/dto/vocabularyCreate.dto';
import { UpdateVocabularyDto } from 'src/dto/vocabularyUpdate.dto';
import { VocabulariesEntity } from 'src/entities/vocabularies.entity';
import { VocabulariesCustome } from 'src/interfaces/vocabularies.interface';
import { Repository } from 'typeorm';
import { ExcelService } from './excel.service';

@Injectable()
export class VocabulariesService {
  constructor(
    @InjectRepository(VocabulariesEntity)
    private vocabulariesEntity: Repository<VocabulariesEntity>,

    private configService: ConfigService,
    private readonly excelService: ExcelService,
  ) {}

  async findAllByChapter(chapterId: number) {
    const vocabularies: VocabulariesCustome[] =
      await this.vocabulariesEntity.find({
        where: { chapter: { id: chapterId } },
      });
    for (const vocabulary of vocabularies) {
      vocabulary.sound =
        this.configService.get<string>('DOMAIN') +
        '/public/mp3/' +
        vocabulary.title +
        '.mp3';
    }
    return vocabularies;
  }

  async create({
    title,
    sub,
    chapterId: id,
  }: CreateVocabularyDto): Promise<VocabulariesEntity> {
    const vocabulary = await this.vocabulariesEntity.findOne({
      where: { title },
    });
    if (vocabulary) {
      return vocabulary;
    } else {
      const vocabulary = this.vocabulariesEntity.create({
        title,
        sub,
        chapter: { id },
      });
      return this.vocabulariesEntity.save(vocabulary);
    }
  }

  async update({ title, sub }: UpdateVocabularyDto, id: number): Promise<void> {
    await this.vocabulariesEntity.update(
      { id },
      {
        title,
        sub,
      },
    );
    return;
  }

  async remove(id: number): Promise<void> {
    await this.vocabulariesEntity.delete({ id });
    return;
  }

  async importExcel(
    chapterId: number,
    file: Express.Multer.File,
  ): Promise<void> {
    const datas = await this.excelService.readFile(file);
    if (datas?.length > 1) {
      for (const data of datas) {
        if (
          typeof data[0] === 'number' &&
          !isNaN(data[0]) &&
          data[1] &&
          data[2]
        ) {
          await this.create({
            chapterId,
            title: data[1],
            sub: data[2],
          });
        }
      }
    }
    return;
  }
}
