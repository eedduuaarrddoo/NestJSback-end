import { Test, TestingModule } from '@nestjs/testing';
import { HamburgersService } from './hamburgers.service';

describe('HamburgersService', () => {
  let service: HamburgersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HamburgersService],
    }).compile();

    service = module.get<HamburgersService>(HamburgersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
