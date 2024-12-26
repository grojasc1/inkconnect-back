import { Test, TestingModule } from '@nestjs/testing';
import { TattoohouseService } from './tattoohouse.service';

describe('TattoohouseService', () => {
  let service: TattoohouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TattoohouseService],
    }).compile();

    service = module.get<TattoohouseService>(TattoohouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
