import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterController } from 'src/controllers/chapter.controller';
import { ChapterEntity } from 'src/entities/chapter.entity';
import { ChaptersService } from 'src/services/chapter.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChapterEntity]),
    ],
    controllers: [ChapterController],
    providers: [ChaptersService],
})
export class ChapterModule { }
