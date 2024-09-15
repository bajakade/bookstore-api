import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from './auth/auth.module'
import {AuthorsModule} from './authors/authors.module'
import {BooksModule} from './books/books.module'
import {ConfigModule} from '@nestjs/config'
import {JwtModule} from '@nestjs/jwt'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import config from '../config';

@Module({
  imports: [
    AuthModule,
    AuthorsModule,
    BooksModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
      synchronize: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: {expiresIn: '60s'}
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
