import { ConflictException, Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from '@dataui/crud-typeorm';
import {User} from './user.entity'
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import {CrudRequest} from '@dataui/crud';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo: Repository<User>) {
        super(repo);
    }

    async createUser(req: CrudRequest, userDto: CreateUserDto) {
        const user = await this.findOneBy({email: userDto.email});
        if (user) {
            throw new ConflictException('Email already exist');
        }

        return this.createOne(req, userDto);
    }
}