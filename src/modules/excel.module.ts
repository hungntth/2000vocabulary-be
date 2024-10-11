import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ExcelController } from 'src/controllers/excel.controller';
import { ExcelService } from 'src/services/excel.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
  ],
  controllers: [ExcelController],
  providers: [ExcelService],
})
export class ExcelModule {}
