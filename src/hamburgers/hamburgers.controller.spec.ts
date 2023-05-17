import { Test, TestingModule } from '@nestjs/testing';
import { HamburgersController } from './hamburgers.controller';
import { HamburgersService } from './hamburgers.service';

describe('HamburgersController', () => {
  let controller: HamburgersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HamburgersController],
      providers: [HamburgersService],
    }).compile();

    controller = module.get<HamburgersController>(HamburgersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
