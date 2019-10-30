import { variableDeclarator } from '@babel/types';

export type EmailAddress = string;

export class Email {

    private value: EmailAddress;

    constructor(address: EmailAddress) {
        this.address = address;
    }

    set address(address) {
        const validator = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (!validator.exec(address)) {
            throw new Error('Unvalid email address');
        }
        this.value = address;
    }
}
