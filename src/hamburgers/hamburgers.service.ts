import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHamburgerDto } from './dto/create-hamburger.dto';
import { UpdateHamburgerDto } from './dto/update-hamburger.dto';

@Injectable()
export class HamburgersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHamburgerDto: CreateHamburgerDto) {
    return await this.prisma.hamburger.create({
      data: createHamburgerDto,
    });
  }

  async findAll() {
    const hamburgers = await this.prisma.hamburger.findMany();
    return hamburgers.map((hamburger) => hamburger);
  }

  async findOne(id: number) {
    return await this.prisma.hamburger.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateHamburgerDto: UpdateHamburgerDto) {
    return await this.prisma.hamburger.update({
      where: { id },
      data: updateHamburgerDto,
    });
  }

  async remove(id: number) {
    try {
      return this.prisma.hamburger.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Hamburger não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
