import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly accountsService: AccountsService,
        private readonly jwtService: JwtService,
    ) {}

    async validate(username: string, password: string) {
        const account = this.accountsService.getAccountById(username);

        if (account && account.password === password) {
            const { password: accountPassword, ...details } = account;
            return details;
        }

        return;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
