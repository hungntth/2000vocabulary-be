import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import { config } from 'dotenv';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const envFilePath = process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env';
  config({ path: envFilePath });

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  });
  app.use(helmet());
  app.use(compression());
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT || 3000);
  console.log('Nest application successfully started ' + process.env.PORT);
}
bootstrap();
