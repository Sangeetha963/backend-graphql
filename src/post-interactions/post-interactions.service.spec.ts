import { Test, TestingModule } from '@nestjs/testing';
import { PostInteractionsService } from './post-interactions.service';

describe('PostInteractionsService', () => {
  let service: PostInteractionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostInteractionsService],
    }).compile();

    service = module.get<PostInteractionsService>(PostInteractionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
