import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(of => User)
export class UserResolver {
  private users: User[] = [
    { id: 1, name: 'Sangeetha', email: 'sangeetha@example.com' },
    { id: 2, name: 'Amit', email: 'amit@example.com' },
    { id: 3, name: 'Dustin', email: 'dustin@example.com' },
    { id: 4, name: 'Michel', email: 'michel@example.com' },
    { id: 5, name: 'William', email: 'william@example.com' }, 
  ];

  @Query(returns => [User])
  getUsers(): User[] {
    return this.users;
  }

  @Query(returns => User, { nullable: true })
  getUser(@Args('id') id: number): User {
    return this.users.find(user => user.id === id);
  }

  // ✅ Mutation
  @Mutation(returns => User)
  createUser(@Args('input') input: CreateUserInput): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...input,
    };
    this.users.push(newUser);
    return newUser;
  }
}
