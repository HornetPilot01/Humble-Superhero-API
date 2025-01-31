import { Injectable } from '@nestjs/common';
import { Superhero } from '../models/superhero.model';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  createSuperhero(superhero: Superhero): void {
    this.superheroes.push(superhero);
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
