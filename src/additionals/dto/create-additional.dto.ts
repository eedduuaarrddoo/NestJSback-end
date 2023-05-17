import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateAdditionalDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  description: string;
}
