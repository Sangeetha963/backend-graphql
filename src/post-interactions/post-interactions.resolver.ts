// src/post-interactions/post-interactions.resolver.ts
import { Resolver, Mutation, Args, Int, Query } from '@nestjs/graphql';
import { PostInteractionsService } from './post-interactions.service';
import { Like, Comment } from './models/post-interaction.model';

@Resolver()
export class PostInteractionsResolver {
  constructor(private readonly postInteractionsService: PostInteractionsService) {}

  @Mutation(() => Comment)
  addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('user') user: string,
    @Args('text') text: string,
  ): Comment {
    return this.postInteractionsService.addComment(postId, user, text);
  }

  @Mutation(() => Like)
  addLike(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('user') user: string,
  ): Like {
    return this.postInteractionsService.addLike(postId, user);
  }

  @Query(() => [Comment])
  getAllComments(): Comment[] {
    return this.postInteractionsService.getAllComments();
  }

  @Query(() => [Like])
  getAllLikes(): Like[] {
    return this.postInteractionsService.getAllLikes();
  }
}
