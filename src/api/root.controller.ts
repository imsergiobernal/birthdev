import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {

    @Get()
    root() {
        return 'Please refer to documentation';
    }
}
