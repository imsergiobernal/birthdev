import { Injectable, Inject } from '@nestjs/common';

import { AccountRepository } from './repositories/account.repository';
import { AccountId } from './domain/Account';

@Injectable()
export class AccountsService {
    date = new Date();

    constructor(@Inject(AccountRepository) private accountRepository: AccountRepository) {
        console.log(this.date);
    }

    getAccountById(id: AccountId) {
        console.log(this.date);
        return this.accountRepository.getById(id);
    }

}
