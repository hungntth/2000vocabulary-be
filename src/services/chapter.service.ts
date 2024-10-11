import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateChapterDto } from "src/dto/chapterCreate.dto";
import { ChapterEntity } from "src/entities/chapter.entity";
import { Repository } from "typeorm";


@Injectable()
export class ChaptersService {
    constructor(
        @InjectRepository(ChapterEntity)
        private chaptersEntity: Repository<ChapterEntity>,
    ) { }

    async create(body: CreateChapterDto): Promise<ChapterEntity> {
        const chapter = this.chaptersEntity.create(
            body,
        );
        return this.chaptersEntity.save(chapter)
    }

    findAll(): Promise<ChapterEntity[]> {
        return this.chaptersEntity.find();
    }

    detail(id: number): Promise<ChapterEntity | null> {
        return this.chaptersEntity.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.chaptersEntity.delete(id);
    }

    async importExcel(id: number, file: Express.Multer.File): Promise<void> {
        
    }
}