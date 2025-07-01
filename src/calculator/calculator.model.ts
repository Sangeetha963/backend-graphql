import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CalculatorResult {
  @Field(() => Float)
  value: number;

  @Field()
  name: string;

  @Field()
  length: number;
}

@ObjectType()
export class NameLengthInfo {
  @Field()
  name: string;

  @Field()
  length: number;
}

@ObjectType()
export class ShortNameLengthInfo {
      @Field()
  name: string;

  @Field()
  length: number;
}
