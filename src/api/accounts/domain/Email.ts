import { variableDeclarator } from '@babel/types';

export type EmailAddress = string;

export class Email {

    private value: EmailAddress;

    static check = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    constructor(address: EmailAddress) {
        this.address = address;
    }

    get address() {
        return this.value;
    }

    set address(address) {
        if (!Email.validateAddress(address)) {
            throw new Error('Unvalid email address');
        }
        this.value = address;
    }

    public validateAddress() {
        return Email.check.exec(this.address) ? true : false;
    }

    public static validateAddress(address: EmailAddress) {
        return Email.check.exec(address) ? true : false;
    }

}
