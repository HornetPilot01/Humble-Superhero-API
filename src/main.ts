import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
    .setTitle('Humble Superhero API')
    .setDescription('API for adding and fetching superheros')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
