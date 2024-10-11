import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VocabulariesEntity } from './vocabularies.entity';

@Entity()
export class ChapterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @OneToMany(
    () => VocabulariesEntity,
    (vocabularyGroup) => vocabularyGroup.chapter,
  )
  vocabularies: VocabulariesEntity[];

  @Column({ default: true })
  isActive: boolean;
}
