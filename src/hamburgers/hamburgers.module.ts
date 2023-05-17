import { Module } from '@nestjs/common';
import { HamburgersService } from './hamburgers.service';
import { HamburgersController } from './hamburgers.controller';

@Module({
  controllers: [HamburgersController],
  providers: [HamburgersService],
})
export class HamburgersModule {}
