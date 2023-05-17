import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaClient();
@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const { user, address, additional, hamburger, costumer, total } =
      createOrderDto;
    const createOrder = await this.prisma.order.create({
      data: {
        costomer: costumer,
        total,
        hamburger: {
          create: [hamburger],
        },
        additional: {
          create: [additional],
        },
        user,
      },
    });

    return createOrder;
  }
  async findAll() {
    const orders = await prisma.order.findMany({});
    return orders.map((additionals) => additionals);
  }

  async findOne(id: number) {
    const order = await prisma.order.findUnique({
      where: { id },
    });
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await prisma.order.findUnique({
      where: { id },
    });
    return order;
  }

  async remove(id: number) {
    try {
      await prisma.order.delete({
        where: { id },
      });
      return;
    } catch (error) {
      throw new HttpException('Additional not found', HttpStatus.NOT_FOUND);
    }
  }
}
