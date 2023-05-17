import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AdditionalsService {
  async create(createAdditionalDto: CreateAdditionalDto) {
    const createAdditional = await prisma.additionals.create({
      data: createAdditionalDto,
    });

    return createAdditional;
  }

  async findAll() {
    const additionals = await prisma.additionals.findMany({});
    return additionals.map((additionals) => additionals);
  }

  async findOne(id: number) {
    const additionals = await prisma.additionals.findUnique({
      where: { id },
    });
    return additionals;
  }

  async update(id: number, updateAdditionalDto: UpdateAdditionalDto) {
    const updatedAddtional = await prisma.additionals.update({
      where: { id },
      data: updateAdditionalDto,
    });
    return updatedAddtional;
  }

  async remove(id: number) {
    try {
      await prisma.additionals.delete({
        where: { id },
      });
      return;
    } catch (error) {
      throw new HttpException('Additional not found', HttpStatus.NOT_FOUND);
    }
  }
}
