import { Module } from '@nestjs/common';
import { PostInteractionsService } from './post-interactions.service';
import { PostInteractionsResolver } from './post-interactions.resolver';

@Module({
  providers: [PostInteractionsService, PostInteractionsResolver]
})
export class PostInteractionsModule {}
