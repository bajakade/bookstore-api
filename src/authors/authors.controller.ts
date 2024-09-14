import { Controller, UseGuards } from '@nestjs/common';
import {Crud, CrudController} from '@dataui/crud';

import {Author} from './author.entity'
import { AuthorsService } from './authors.service';
import { JwtAuthGuard } from 'src/auth/guards/auth-jwt.guard';

@Crud({
    model: {
        type: Author
    },
    routes: {
        createOneBase: {
            decorators: [UseGuards(JwtAuthGuard)]
        }
    }
})
@Controller('authors')
export class AuthorsController implements CrudController<Author> {
    constructor(public service: AuthorsService) {}
}