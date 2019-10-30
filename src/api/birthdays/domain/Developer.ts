import { AccountId } from './../../accounts/domain/Account';
import { Email } from './../../accounts/domain/Email';

export type DeveloperName = string;

export type DeveloperBirthday = Date;

export class Developer {

    accountId: AccountId;

    name: DeveloperName;

    birthday: DeveloperBirthday;

    constructor(
        accountId: AccountId,
        name: DeveloperName,
    ) { }
}
