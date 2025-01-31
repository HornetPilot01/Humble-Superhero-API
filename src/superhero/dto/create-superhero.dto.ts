import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @ApiProperty({ description: 'The name of the superhero' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The superpower of the superhero' })
  @IsString()
  readonly superpower: string;

  @ApiProperty({ description: 'The humility score of the superhero' })
  @IsInt()
  @Min(1)
  @Max(10)
  readonly humilityScore: number;
}