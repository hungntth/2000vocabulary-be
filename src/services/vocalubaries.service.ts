import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateVocabularyDto } from "src/dto/vocabularyCreate.dto";
import { VocabulariesEntity } from "src/entities/vocabularies.entity";
import { Repository } from "typeorm";

@Injectable()
export class VocabulariesService {
    constructor(
        @InjectRepository(VocabulariesEntity)
        private vocabulariesEntity: Repository<VocabulariesEntity>,
    ) { }


    async create(body: CreateVocabularyDto): Promise<VocabulariesEntity> {
        const vocabulary = this.vocabulariesEntity.create(
            body,
        );
        return this.vocabulariesEntity.save(vocabulary)
    }

    async update(body: CreateVocabularyDto): Promise<void> {
        await this.vocabulariesEntity.update({ id: 1 },
            body,
        );
        return;
    }
}