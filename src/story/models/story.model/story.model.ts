import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Story {
  @Field(() => ID)
  id: string;

  @Field()
  imageUrl: string;

  @Field()
  author: string;

  @Field()
  createdAt: Date;
}
