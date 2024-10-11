import { Controller, Get, Post } from "@nestjs/common";
import { VocabulariesService } from "src/services/vocalubaries.service";

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private readonly vocabulariesService: VocabulariesService) { }

  @Post()
  findAll() {
    return 'bla bla';
  }
}