import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { DrinksModule } from './drinks/drinks.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AdditionalsModule } from './additionals/additionals.module';
import { HamburgersModule } from './hamburgers/hamburgers.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    HamburgersModule,
    AdditionalsModule,
    OrderModule,
    DrinksModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
