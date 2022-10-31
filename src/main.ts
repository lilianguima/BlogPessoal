import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil", "www.generationbrasil.com.br", "generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ ='-03:00'; // horario de brasília

  app.useGlobalPipes(new ValidationPipe ()); //trabalhar em toda as requisições
  app.enableCors(); //requisições de fora

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
