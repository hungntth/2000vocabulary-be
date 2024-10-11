import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabulariesController } from 'src/controllers/vocabularies.controller';
import { VocabulariesEntity } from 'src/entities/vocabularies.entity';
import { ExcelService } from 'src/services/excel.service';
import { VocabulariesService } from 'src/services/vocabularies.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VocabulariesEntity]),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
  ],
  controllers: [VocabulariesController],
  providers: [VocabulariesService, ExcelService],
})
export class VocabulariesModule {}
