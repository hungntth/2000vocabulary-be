import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterController } from 'src/controllers/chapter.controller';
import { ChapterEntity } from 'src/entities/chapter.entity';
import { VocabulariesEntity } from 'src/entities/vocabularies.entity';
import { ChaptersService } from 'src/services/chapter.service';
import { ExcelService } from 'src/services/excel.service';
import { VocabulariesService } from 'src/services/vocabularies.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterEntity, VocabulariesEntity])],
  controllers: [ChapterController],
  providers: [ChaptersService, VocabulariesService, ExcelService],
})
export class ChapterModule {}
