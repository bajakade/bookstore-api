import {
    Crud,
    CrudController,
    CrudRequest,
    Override,
    ParsedBody,
    ParsedRequest
} from '@dataui/crud';

import { Controller } from "@nestjs/common";
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from "./user.entity";
import { UsersService } from "./users.service";

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
        exclude: [],
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

    @Override()
    createOne(
        @ParsedRequest() request: CrudRequest,
        @ParsedBody() dto: CreateUserDto
    )  {
        return this.service.createUser(request, dto);
    }
}