import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {

    @Get()
    root() {
        return 'Please refer to documentation';
    }
}
