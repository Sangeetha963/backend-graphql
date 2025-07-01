import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';

@Injectable()
export class CalculatorService {
  calculateNameLengthMultiplied(user: { id: number; name: string }, totalUsers: number): number {
    return user.name.length * totalUsers;
  }
}
