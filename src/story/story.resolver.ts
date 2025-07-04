import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { Story } from './models/story.model';
import { Story } from './models/story.model/story.model';
import { StoryService } from './story.service';
// import { CreateStoryInput } from './models/create-story.input';
import { CreateStoryInput } from './models/create-story.input';

@Resolver(() => Story)
export class StoryResolver {
  constructor(private readonly storyService: StoryService) {}

  @Query(() => [Story], { name: 'getAllStories' })
  getAllStories() {
    return this.storyService.findAll();
  }

  @Query(() => Story, { name: 'getStoryById' })
  getStoryById(@Args('id') id: string) {
    return this.storyService.findOne(id);
  }

  @Mutation(() => Story)
  createStory(@Args('input') input: CreateStoryInput) {
    return this.storyService.create(input);
  }
}
