import { AccountId } from '../../accounts/domain/Account';
import { Email } from '../../accounts/domain/Email';
import { Country } from './Country';

export type DeveloperName = string;

export type DeveloperBirthday = Date;

export type DeveloperCountry = Country;

export class Developer {

    privaname: DeveloperName;

    birthday: DeveloperBirthday;

    constructor(
        private readonly accountId: AccountId,
        private name: DeveloperName,
        private country: DeveloperCountry,
    ) {}
}
