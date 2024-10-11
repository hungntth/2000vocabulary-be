import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChapterDto } from 'src/dto/chapterCreate.dto';
import { ChapterEntity } from 'src/entities/chapter.entity';
import { Repository } from 'typeorm';
import { VocabulariesService } from './vocabularies.service';
import { existsSync } from 'fs';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(ChapterEntity)
    private chaptersEntity: Repository<ChapterEntity>,
    private readonly vocabulariesService: VocabulariesService,
    private configService: ConfigService,
  ) {}

  async create(body: CreateChapterDto): Promise<ChapterEntity> {
    const chapter = this.chaptersEntity.create(body);
    return this.chaptersEntity.save(chapter);
  }

  async findAll(): Promise<ChapterEntity[]> {
    const chapters = await this.chaptersEntity.find();
    for (const chapter of chapters) {
      chapter.image =
        this.configService.get<string>('DOMAIN') + '/' + chapter.image;
    }
    return chapters;
  }

  async detail(id: number) {
    const chapter = await this.chaptersEntity.findOneBy({ id });
    chapter.vocabularies = await this.vocabulariesService.findAllByChapter(id);
    return chapter;
  }

  async remove(id: number): Promise<void> {
    await this.chaptersEntity.delete(id);
  }

  async syncData(id: number) {
    const vocabularies = await this.vocabulariesService.findAllByChapter(id);
    for (const vocabulary of vocabularies) {
      if (
        existsSync(join(__dirname, '../../..', `mp3/${vocabulary.title}.mp3`))
      ) {
      } else {
        console.log(join(__dirname, '../../..', `mp3/${vocabulary.title}.mp3`));
        console.log('File does not exist.');
      }
    }
  }
}
