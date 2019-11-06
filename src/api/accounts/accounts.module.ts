import { Module, forwardRef } from '@nestjs/common';

import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountRepository } from './repositories/account.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [
    AccountsService,
    AccountRepository,
  ],
  controllers: [AccountsController],
  imports: [forwardRef(() => AuthModule)],
  exports: [
    AccountsService,
    AccountRepository,
  ],
})
export class AccountsModule {}
