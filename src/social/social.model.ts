// src/social/social.model.ts
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  caption: string;

  @Field()
  imageUrl: string;

  @Field()
  author: string;

  @Field()
  createdAt: Date;
}
