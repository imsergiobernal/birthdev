import { Module } from '@nestjs/common';
import { BirthdaysController } from './birthdays.controller';

@Module({
  controllers: [BirthdaysController],
})
export class BirthdaysModule {}
