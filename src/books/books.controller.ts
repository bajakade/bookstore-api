import {Crud, CrudController} from '@dataui/crud'

import { Book } from './book.entity';
import { BooksService } from './books.service';
import { Controller } from '@nestjs/common';
import {CreateBookDto} from './dtos/create-book.dto'

@Crud({
    model: {
        type: Book
    },
    dto: {
        create: CreateBookDto
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})
@Controller('books')
export class BooksController implements CrudController<Book> {
    constructor(public service: BooksService) {}
}