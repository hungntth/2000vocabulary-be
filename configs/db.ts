import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { User } from 'src/entities/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { VocabulariesEntity } from 'src/entities/vocabularies.entity';
import { ChapterEntity } from 'src/entities/chapter.entity';

const envFilePath = process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env';
config({ path: envFilePath });
export const dataSourceOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, VocabulariesEntity, ChapterEntity],
    synchronize: true,
    // entities: ['dist/**/*.entity{.ts,.js}'],
    // migrations: ['dist/db/migrations/*{.ts,.js}'],
    // logging: false,
    // synchronize: false,
};

export default dataSourceOptions;
