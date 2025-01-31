import { Module } from '@nestjs/common';
import { SuperheroController } from './controllers/superhero.controller';
import { SuperheroService } from './services/superhero.service';

@Module({
  controllers: [SuperheroController],
  providers: [SuperheroService]
})
export class SuperheroModule {}
