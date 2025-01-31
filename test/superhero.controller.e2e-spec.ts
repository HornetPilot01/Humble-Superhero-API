import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from '../src/superhero/controllers/superhero.controller';
import { SuperheroService } from '../src/superhero/services/superhero.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CreateSuperheroDto } from 'src/superhero/dto/create-superhero.dto';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication;
  let superheroService = {
    create: jest.fn((dto) => ({ id: Date.now(), ...dto })),
    findAll: jest.fn(() => []),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [{ provide: SuperheroService, useValue: superheroService }],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // IMPORTANTLY!!!
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const postEndpoint = '/superheroes/create_new';

  it('Should return 400 if humilityScore is out of range', async () => {
    const response = await request(app.getHttpServer())
      .post(postEndpoint)
      .send({
        name: 'Superman',
        superpower: 'Flight',
        humilityScore: 11,
      });
      
    expect(response.status).toBe(400);
    expect(response.body.message).toContain(
      'humilityScore must not be greater than 10',
    );
  });

  it('Should return 400 if humilityScore is less then 1', async () => {
    const response = await request(app.getHttpServer())
      .post(postEndpoint)
      .send({
        name: 'Superman',
        superpower: 'Flight',
        humilityScore: 0,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain(
      'humilityScore must not be less than 1',
    );
  });

  it('Should return 400 if humilityScore is not an integer', async () => {
    const response = await request(app.getHttpServer())
      .post(postEndpoint)
      .send({
        name: 'Superman',
        superpower: 'Flight',
        humilityScore: NaN,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain(
      'humilityScore must be an integer number',
    );
  });

  it('Should create superhero successfully', async () => {
    const hero: CreateSuperheroDto = {
      name: 'Batman',
      superpower: 'Detective skills',
      humilityScore: 9,
    };

    const response = await request(app.getHttpServer()).post(postEndpoint).send(hero);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(hero.name);
    expect(response.body.superpower).toBe(hero.superpower);
    expect(response.body.humilityScore).toBe(hero.humilityScore);
  });
});
