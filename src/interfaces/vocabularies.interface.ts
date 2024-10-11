import { VocabulariesEntity } from 'src/entities/vocabularies.entity';

export interface VocabulariesCustome extends VocabulariesEntity {
  sound?: string;
}
