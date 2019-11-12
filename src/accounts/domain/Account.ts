import { AccountId } from './Account';
import { Email, EmailAddress } from './Email';

export type AccountId = EmailAddress;
export type AccountPassword = string;

export class Account {

    private email: Email;

    password: AccountPassword;

    constructor(id?: AccountId, password?: AccountPassword) {
        this.id = id;
        this.password = password;
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
