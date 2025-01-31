import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from '../services/superhero.service';
import { Superhero } from '../models/superhero.model';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  addSuperhero(@Body() superhero: Superhero): string {
    this.superheroService.createSuperhero(superhero);
    return 'Superhero added successfully!';
  }

  @Get()
  getAllSuperheroes(): Superhero[] {
    return this.superheroService.getSuperheroes();
  }
}
