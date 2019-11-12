import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AccountsService } from '../accounts/accounts.service';

@Controller('birthdays')
export class BirthdaysController {

    constructor(private readonly accountService: AccountsService) {}

    @Get('')
    getBirthdays(@Query('date') date?) {}

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getBirthday() {
        const x = this.accountService.getAccountById('john@gmail.com');
        return { x };
    }

}
