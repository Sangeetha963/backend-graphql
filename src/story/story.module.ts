import { Module } from '@nestjs/common';
import { StoryResolver } from './story.resolver';
import { StoryService } from './story.service';

@Module({
  providers: [StoryResolver, StoryService]
})
export class StoryModule {}
