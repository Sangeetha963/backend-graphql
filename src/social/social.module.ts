import { Module } from '@nestjs/common';
import { SocialService } from './social.service';
import { SocialResolver } from './social.resolver';

@Module({
  providers: [SocialService, SocialResolver]
})
export class SocialModule {}
