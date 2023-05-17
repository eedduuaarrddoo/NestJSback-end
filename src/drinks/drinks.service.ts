import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';

@Injectable()
export class DrinksService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateDrinkDto) {
    return this.prisma.drinks.create({
      data: data,
    });
  }

  findAll() {
    return this.prisma.drinks.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.drinks.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return await this.prisma.drinks.update({
      where: { id },
      data: updateDrinkDto,
    });
  }

  async remove(id: number) {
    try {
      return this.prisma.drinks.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Drink não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
