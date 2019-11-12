import { Module, forwardRef } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { AccountRepository } from './repositories/account.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [
    AccountsService,
    AccountRepository,
  ],
  imports: [forwardRef(() => AuthModule)],
  exports: [
    AccountsService,
  ],
})
export class AccountsModule {}
