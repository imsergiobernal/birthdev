import { Controller, Get, Post, Inject, Res } from '@nestjs/common';

import { CreateAccountUseCaseService } from './use-cases/create-account-use-case/create-account-use-case.service';

@Controller('accounts')
export class AccountsController {
    @Post()
    createAccount(@Inject(CreateAccountUseCaseService) usecase: CreateAccountUseCaseService) {
        usecase.execute();
    }

    @Get()
    getAccounts() {
        return 'Accounts';
    }
}
