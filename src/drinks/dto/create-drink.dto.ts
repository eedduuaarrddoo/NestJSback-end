import { Drinks } from '../entities/drink.entity';
import { IsNumber, IsString } from 'class-validator';

export class CreateDrinkDto {
  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  name: string;
}
