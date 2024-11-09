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
  const app = await NestFactory.create(AppModule);
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    }),
  );
  await app.listen(3020);
}
bootstrap();
