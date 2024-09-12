import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from "./user.entity";
import { UserController } from "./users.controller";
import {UsersService} from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // create typeorm repo
    controllers: [UserController],
    exports: [UsersService],
    providers: [UsersService]
})
export class UsersModule {}