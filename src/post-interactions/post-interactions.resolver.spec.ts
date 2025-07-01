import { Test, TestingModule } from '@nestjs/testing';
import { PostInteractionsResolver } from './post-interactions.resolver';

describe('PostInteractionsResolver', () => {
  let resolver: PostInteractionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostInteractionsResolver],
    }).compile();

    resolver = module.get<PostInteractionsResolver>(PostInteractionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
