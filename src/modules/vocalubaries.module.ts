import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabulariesEntity } from 'src/entities/vocabularies.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VocabulariesEntity]),
    MulterModule.registerAsync({
        useFactory: () => ({
            dest: './upload',
        }),
    }),],
    controllers: [],
    providers: [],
})
export class VocabulariesModule { }
