import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from "@nestjs/common";
import { CreateChapterDto } from "src/dto/chapterCreate.dto";
import { ChaptersService } from "src/services/chapter.service";
import { CustomUploadFile } from "src/utils/decorators";
import { CustomFileInterceptor } from "src/utils/interceptors";

@Controller('chapters')
export class ChapterController {

  constructor(private readonly chaptersService: ChaptersService) { }

  @Get()
  async findAll() {
    return await this.chaptersService.findAll();
  }

  @Post('create')
  async create(@Body() createCategoryDto: CreateChapterDto) {
    return await this.chaptersService.create(createCategoryDto);
  }

  @Get(':id')
  async detail(@Param('id') id: number) {
    return await this.chaptersService.detail(id);
  }

}