import { AccountId } from './Account';
import { Email, EmailAddress } from './Email';

export type AccountId = EmailAddress;

export class Account {

    email: Email;

    constructor(accountId?: AccountId) {
        this.id = accountId;
    }

    setEmailAddress = (address: EmailAddress): void => {
        this.email ? this.email.address = address : this.email = new Email(address);
    }

    get id(): AccountId {
        return this.email.address;
    }

    set id(value: AccountId) {
        this.setEmailAddress(value);
    }

}
