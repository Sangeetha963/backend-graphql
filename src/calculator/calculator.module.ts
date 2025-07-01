import { Module } from '@nestjs/common';
import { CalculatorResolver } from './calculator.resolver';
import { CalculatorService } from './calculator.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [CalculatorResolver, CalculatorService]
})
export class CalculatorModule {}
