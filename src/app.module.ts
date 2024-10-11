import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'configs/configuration';
import { dataSourceOptions } from 'configs/db';
import { ChapterModule } from './modules/chapter.module';
import { VocabulariesModule } from './modules/vocalubaries.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FilesModule } from './modules/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'public'),
      serveRoot: '/public',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'views'),
    }),

    TypeOrmModule.forRoot(dataSourceOptions),
    ChapterModule,
    VocabulariesModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
