import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';



async function bootstrap() {
  config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(helmet());
  app.use(compression());

  app.setGlobalPrefix('api/v1');
  app.useStaticAssets(join(__dirname, '..', 'views'));

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT || 3000);
  console.log('Nest application successfully started ' + process.env.PORT)
}
bootstrap();
