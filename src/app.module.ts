import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuperheroModule } from './superhero/superhero.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/exception.filter';

@Module({
  imports: [SuperheroModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
