import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('accounts')
export class AccountsController {

    @Get()
    getAccounts() {
        return 'Accounts';
    }

    @UseGuards(AuthGuard())
    @Get(':id')
    getAccount(@Request() req) {
        return req.user;
    }
}
