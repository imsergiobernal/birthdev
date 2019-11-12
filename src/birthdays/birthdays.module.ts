import { Module } from '@nestjs/common';
import { BirthdaysController } from '../api/birthdays.controller';
import { AccountsService } from '../accounts/accounts.service';

import { AccountsModule } from '../accounts/accounts.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AccountsModule,
    AuthModule,
  ],
})
export class BirthdaysModule {}
