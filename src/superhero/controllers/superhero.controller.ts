import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from '../services/superhero.service';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Superhero } from '../models/superhero.model';

@ApiTags('superheroes')
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post("create_new")
  @ApiOperation({ summary: 'Create a new superhero' })
  @ApiBody({ type: CreateSuperheroDto })
  @ApiResponse({
    status: 201,
    description: 'The superhero has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.create(createSuperheroDto);
  }

  @Get("get_all")
  @ApiOperation({
    summary: 'Get a list of superheroes sorted by humility score',
  })
  @ApiResponse({
    status: 200,
    description: 'List of superheroes',
    type: [Superhero],
  })
  fetchAll() {
    return this.superheroService.fetchAll();
  }
}
