import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoryInput {
  @Field()
  imageUrl: string;

  @Field()
  author: string;
}
