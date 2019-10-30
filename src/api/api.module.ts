import { Module } from '@nestjs/common';

import { BirthdaysModule } from './birthdays/birthdays.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
    imports: [AccountsModule, BirthdaysModule],
})
export class ApiModule {}
