import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorResolver } from './calculator.resolver';

describe('CalculatorResolver', () => {
  let resolver: CalculatorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorResolver],
    }).compile();

    resolver = module.get<CalculatorResolver>(CalculatorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
