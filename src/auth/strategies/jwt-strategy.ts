import {ExtractJwt, Strategy} from 'passport-jwt'

import { Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';

export type JwtPayload = {
    username: string;
    sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
          });
    }

    async validate(parsedToken: JwtPayload) {
        return {id: parsedToken.sub, email: parsedToken.username}
    }

    // authenticate(this: StrategyCreated<this, this & StrategyCreatedStatic>, req: Request, options?: any) {
        
    // }
}