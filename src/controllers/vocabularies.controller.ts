import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateVocabularyDto } from 'src/dto/vocabularyCreate.dto';
import { UpdateVocabularyDto } from 'src/dto/vocabularyUpdate.dto';
import { VocabulariesService } from 'src/services/vocabularies.service';
import { CustomUploadFile } from 'src/utils/decorators';
import { CustomFileInterceptor } from 'src/utils/interceptors';

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private readonly vocabulariesService: VocabulariesService) {}

  @Get('search')
  search(@Body() { chapterId }: { chapterId: number }) {
    return this.vocabulariesService.findAllByChapter(chapterId);
  }

  @Post('create')
  create(@Body() body: CreateVocabularyDto) {
    return this.vocabulariesService.create(body);
  }

  @Put('update/:id')
  update(@Body() body: UpdateVocabularyDto, @Param('id') id: number) {
    return this.vocabulariesService.update(body, id);
  }

  @Delete('delete/:id')
  removeVocabulary(@Param('id') id: number) {
    return this.vocabulariesService.remove(id);
  }

  @Post('import')
  @UseInterceptors(CustomFileInterceptor())
  importExcel(
    @Body() { chapterId }: { chapterId: number },
    @CustomUploadFile()
    file: Express.Multer.File,
  ) {
    return this.vocabulariesService.importExcel(chapterId, file);
  }
}
