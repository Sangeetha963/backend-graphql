import { Injectable } from '@nestjs/common';
// import { Story } from './models/story.model';
import { Story } from './models/story.model/story.model';

@Injectable()
export class StoryService {
  private stories: Story[] = [];

  create(input: Partial<Story>): Story {
    const newStory = {
      id: (Math.random() * 100000).toFixed(0),
      ...input,
      createdAt: new Date(),
    } as Story;

    this.stories.unshift(newStory);
    return newStory;
  }

  findAll(): Story[] {
    return this.stories;
  }

  findOne(id: string): Story | undefined {
    return this.stories.find(s => s.id === id);
  }
}
