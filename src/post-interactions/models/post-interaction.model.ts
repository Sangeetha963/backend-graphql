import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Like {
  @Field(() => Int)
  postId: number;

  @Field()
  user: string;

  @Field()
  createdAt: string; // ✅ Add this field to fix the error
}

@ObjectType()
export class Comment {
  @Field(() => Int)
  postId: number;

  @Field()
  user: string;

  @Field()
  text: string;

  @Field()
  createdAt: string;
}
