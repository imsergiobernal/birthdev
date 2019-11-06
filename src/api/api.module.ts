import { Module } from '@nestjs/common';

import { AccountsService } from './accounts/accounts.service';

import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { BirthdaysModule } from './birthdays/birthdays.module';
import { ApiController } from './api.controller';

@Module({
    providers: [AccountsService],
    controllers: [ApiController],
    imports: [AccountsModule, AuthModule, BirthdaysModule],
})
export class ApiModule {}
