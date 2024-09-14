import {AuthController} from './auth.controller'
import {AuthService} from './auth.service'
import { AuthorsModule } from 'src/authors/authors.module';
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from './strategies/jwt-strategy';
import {LocalStrategy} from './strategies/local-strategy';
import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        AuthorsModule,
        UsersModule,
        PassportModule,
        JwtModule
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule {}