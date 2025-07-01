// src/social/social.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Post } from './social.model';
import { SocialService } from './social.service';

@Resolver(() => Post)
export class SocialResolver {
  constructor(private readonly socialService: SocialService) {}

  @Query(() => [Post])
  getAllPosts(): Post[] {
    return this.socialService.getAllPosts();
  }

  @Query(() => Post)
  getPostById(@Args('id', { type: () => Int }) id: number): Post {
    return this.socialService.getPostById(id);
  }

  @Mutation(() => Post)
  createPost(
    @Args('caption') caption: string,
    @Args('imageUrl') imageUrl: string,
    @Args('author') author: string,
  ): Post {
    return this.socialService.createPost(caption, imageUrl, author);
  }
}
