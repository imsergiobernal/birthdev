import { Controller, Get, Query } from '@nestjs/common';

@Controller('birthdays')
export class BirthdaysController {

    @Get('')
    getBirthdays(@Query('date') date?) {

    }

}
