import { Module, forwardRef } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountsModule } from '../accounts/accounts.module';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { jwtConstants } from './constants';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  imports: [
    forwardRef(() => AccountsModule),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  exports: [
    AuthService,
    PassportModule,
  ],
})
export class AuthModule {}
