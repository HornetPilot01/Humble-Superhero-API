import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  imports: [SuperheroModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
