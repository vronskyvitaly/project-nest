import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const options = {
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: true,
//     optionsSuccessStatus: 204,
//     credentials: true,
//   };
//   app.enableCors(options);
//   await app.listen(3020);
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: true, // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });
  await app.listen(3020);
}
bootstrap();
