import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { CalculatorModule } from './calculator/calculator.module';
import { SocialModule } from './social/social.module';
import { PostInteractionsModule } from './post-interactions/post-interactions.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    CalculatorModule,
    SocialModule,
    PostInteractionsModule,
    StoryModule,
  ],
})
export class AppModule {}
