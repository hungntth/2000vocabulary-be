import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FilesService } from 'src/services/file.service';
import { CustomUploadImage } from 'src/utils/decorators';
import { CustomImagesInterceptor } from 'src/utils/interceptors';

@Controller('files')
export class FileController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(CustomImagesInterceptor())
  async uploadExcel(
    @CustomUploadImage()
    file: Express.Multer.File,
  ) {
    return this.filesService.uploadFile(file);
  }
}
