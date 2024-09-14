import {
    Crud,
    CrudController,
    CrudRequest,
    Override,
    ParsedBody,
    ParsedRequest
} from '@dataui/crud';

import { Controller, UseGuards } from "@nestjs/common";
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import {JwtAuthGuard} from '../auth/guards/auth-jwt.guard'

@Crud({
    model: {
        type: User
    },
    dto: {
        create: CreateUserDto
    },
    params: {
        id: {
          field: 'id',
          type: 'uuid',
          primary: true
        }
    },
    query: {
        exclude: ['password'],
        alwaysPaginate: true,
        limit: 10
    },
})
@Controller('users')
export class UserController implements CrudController<User> {
    constructor(public service: UsersService){}

    get base(): CrudController<User> {
        return this;
    }

    @UseGuards(JwtAuthGuard)
    @Override()
    createOne(
        @ParsedRequest() request: CrudRequest,
        @ParsedBody() dto: CreateUserDto
    )  {
        return this.service.createUser(request, dto);
    }
}