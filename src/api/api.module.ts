import { Module } from '@nestjs/common';

import { AccountsModule } from '../accounts/accounts.module';
import { AuthModule } from '../auth/auth.module';
import { BirthdaysModule } from '../birthdays/birthdays.module';

import { AuthController } from './auth.controller';
import { AccountsController } from './accounts.controller';
import { BirthdaysController } from './birthdays.controller';
import { RootController } from './root.controller';

@Module({
    providers: [],
    controllers: [
        AccountsController,
        AuthController,
        BirthdaysController,
        RootController,
    ],
    imports: [
        AccountsModule,
        AuthModule,
        BirthdaysModule,
    ],
})
export class ApiModule {}
