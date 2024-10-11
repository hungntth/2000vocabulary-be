import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'configs/configuration';
import { dataSourceOptions } from 'configs/db';
import { ChapterModule } from './modules/chapter.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    load: [configuration],
  }), TypeOrmModule.forRoot(dataSourceOptions),
    ChapterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
