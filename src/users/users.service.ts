import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from '@dataui/crud-typeorm';
import {User} from './user.entity'
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from "typeorm";

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo: Repository<User>) {
        super(repo);
    }
}