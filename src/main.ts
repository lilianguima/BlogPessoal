import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ ='-03:00'; // horario de brasília

  app.useGlobalPipes(new ValidationPipe ()); //trabalhar em toda as requisições
  app.enableCors(); //requisições de fora

  await app.listen(4000);
}
bootstrap();
