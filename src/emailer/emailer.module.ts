import { Module } from '@nestjs/common';
import { EmailerService } from './emailer.service';
import { EmailerController } from './emailer.controller';

@Module({
  controllers: [EmailerController],
  providers: [EmailerService],
})
export class EmailerModule {}
