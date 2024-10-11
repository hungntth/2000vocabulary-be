import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from 'src/controllers/file.controller';
import { FilesService } from 'src/services/file.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './public/images',
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FilesService],
  exports: [],
})
export class FilesModule {}
