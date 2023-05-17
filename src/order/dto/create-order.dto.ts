import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAdditionalDto } from 'src/additionals/dto/create-additional.dto';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { CreateHamburgerDto } from 'src/hamburgers/dto/create-hamburger.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
//import { CreateDrinkDto } from 'src/drinks/dto/create-drinks.dto';

export class CreateOrderDto {
  @IsString()
  costumer: string;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @ValidateNested()
  @Type(() => CreateAdditionalDto)
  additional: CreateAdditionalDto;

  @ValidateNested()
  @Type(() => CreateHamburgerDto)
  hamburger: CreateHamburgerDto;

  //@ValidateNested()
  //@Type(() => CreateDrinkDto)
  //drink: CreateDrinkDto;
}
