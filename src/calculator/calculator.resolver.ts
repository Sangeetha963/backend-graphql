import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CalculatorService } from './calculator.service';
import { CalculatorResult, NameLengthInfo,ShortNameLengthInfo } from './calculator.model';
import { UserService } from 'src/user/user.service';

@Resolver()
export class CalculatorResolver {
  constructor(
    private readonly calculatorService: CalculatorService,
    private readonly userService: UserService, // correct casing
  ) {}

  @Query(() => CalculatorResult)
  multiplyNameLengthByTotalUsers(
    @Args('userId', { type: () => Int }) userId: number,
  ): CalculatorResult {
    const users = this.userService.getAllUsers();
    const user = this.userService.getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const value = this.calculatorService.calculateNameLengthMultiplied(user, users.length);
    const name = user.name;
    const length = name.length;

    return { value, name, length }; // ✅ matches CalculatorResult
  }

  @Query(() => NameLengthInfo)
  longestName(): NameLengthInfo {
    const users = this.userService.getAllUsers();
    const longest = users.reduce((a, b) =>
      a.name.length > b.name.length ? a : b,
    );
    return { name: longest.name, length: longest.name.length };
  }

  @Query(() => ShortNameLengthInfo)
  shortestName(): ShortNameLengthInfo {
    const users = this.userService.getAllUsers();
    const shortest = users.reduce((a, b) =>
        a.name.length < b.name.length ? a : b,
    )
    return { name: shortest.name, length: shortest.name.length}
  }
  @Query(() => Number)
    averageNameLength(): number {
    const users = this.userService.getAllUsers();
    const totalLength = users.reduce((sum, user) => sum + user.name.length, 0);
    return users.length ? totalLength / users.length : 0;
 }

 @Query(() => [NameLengthInfo])
usersWithNameLongerThan(
  @Args('minLength', { type: () => Int }) minLength: number,
): NameLengthInfo[] {
  const users = this.userService.getAllUsers();
  return users
    .filter(u => u.name.length > minLength)
    .map(u => ({ name: u.name, length: u.name.length }));
}
}
