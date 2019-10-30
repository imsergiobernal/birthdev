import { join } from 'path';

import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AngularModule } from './angular/angular.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    AngularModule.forRoot({
      rootPath: join('www/dist/www'),
    }),
    // MongooseModule.forRoot('mongodb://mongo:27017/birthdev'),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
