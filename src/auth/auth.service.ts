import * as bcrypt from 'bcrypt';

import { AuthLoginDto } from "./dtos/auth-login.dto";
import { Injectable } from "@nestjs/common";
import {JwtPayload} from './strategies/jwt-strategy'
import {JwtService} from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async validateUser(auth: AuthLoginDto) {
        const {username, password} = auth;
        const user = await this.userService.findOne({
            where: {
                email: username
            }
        });

        if (!user) {
            return null;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            return user;
        }

       return null;
    }

    async signIn({id, email}: User) {
        const payload: JwtPayload = { username: email, sub: id };
        return {
            id,
            email,
            accessToken: this.jwtService.sign(payload, {secret: process.env.JWT_SECRET}),
        };
    }
}