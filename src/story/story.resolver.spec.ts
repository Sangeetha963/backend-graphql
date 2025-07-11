import { Test, TestingModule } from '@nestjs/testing';
import { StoryResolver } from './story.resolver';

describe('StoryResolver', () => {
  let resolver: StoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoryResolver],
    }).compile();

    resolver = module.get<StoryResolver>(StoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
