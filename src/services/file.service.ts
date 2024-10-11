import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  uploadFile(file: Express.Multer.File) {
    console.log(file.filename);
    return { filename: file.filename };
  }
}
