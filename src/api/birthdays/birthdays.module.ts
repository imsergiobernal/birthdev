import { Module } from '@nestjs/common';
import { BirthdaysController } from './birthdays.controller';
import { AccountsService } from '../accounts/accounts.service';

import { AccountsModule } from '../accounts/accounts.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [
    BirthdaysController,
  ],
  imports: [
    AccountsModule,
    AuthModule,
  ],
})
export class BirthdaysModule {}
