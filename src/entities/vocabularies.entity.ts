import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ChapterEntity } from './chapter.entity';

@Entity()
export class VocabulariesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sub: string;

  @ManyToOne(() => ChapterEntity, (chapter) => chapter.vocabularies)
  chapter: ChapterEntity;

  @Column({ default: true })
  isActive: boolean;
}
