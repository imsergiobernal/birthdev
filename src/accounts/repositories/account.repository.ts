import { Injectable } from '@nestjs/common';
import { Account, AccountId } from '../domain/Account';

@Injectable()
export class AccountRepository {

    private readonly accounts: Account[];

    constructor() {
        this.accounts = [
            new Account('john@gmail.com', 'changeme'),
            new Account('chris@hotmail.com', 'secret'),
            new Account('maria@yahoo.com', 'guess'),
        ];
    }

    public getById(id: AccountId) {
        return this.accounts.find((account) => account.id === id);
    }
}
