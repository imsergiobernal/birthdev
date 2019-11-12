import { Injectable, Inject } from '@nestjs/common';

import { AccountRepository } from './repositories/account.repository';
import { AccountId } from './domain/Account';

@Injectable()
export class AccountsService {

    constructor(private accountRepository: AccountRepository) {}

    getAccountById(id: AccountId) {
        return this.accountRepository.getById(id);
    }

}
