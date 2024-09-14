import * as bcrypt from 'bcrypt';

import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";

import { AuthLoginDto } from "./dtos/auth-login.dto";
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

    async login({id, email}: User) {
        const payload = { username: email, sub: id };
        return {
            id,
            email,
            accessToken: this.jwtService.sign(payload),
        };
      }
}