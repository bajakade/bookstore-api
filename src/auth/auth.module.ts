import {AuthController} from './auth.controller'
import {AuthService} from './auth.service'
import {LocalStrategy} from './guards/strategies/local-strategy'
import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [UsersModule, PassportModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}