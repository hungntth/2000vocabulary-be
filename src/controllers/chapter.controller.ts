import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateChapterDto } from 'src/dto/chapterCreate.dto';
import { ChaptersService } from 'src/services/chapter.service';

@Controller('chapters')
export class ChapterController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get('search')
  async findAll() {
    return await this.chaptersService.findAll();
  }

  @Post('create')
  async create(@Body() createCategoryDto: CreateChapterDto) {
    return await this.chaptersService.create(createCategoryDto);
  }

  @Get('get-by-id/:id')
  async detail(@Param('id') id: number) {
    return await this.chaptersService.detail(id);
  }

  @Get('sync/:id')
  async syncData(@Param('id') id: number) {
    return await this.chaptersService.syncData(id);
  }
}
