import { Injectable } from '@nestjs/common';
import { Superhero } from '../models/superhero.model';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const newSuperhero = {
      id: uuidv4(),
      ...createSuperheroDto,
    };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  fetchAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
