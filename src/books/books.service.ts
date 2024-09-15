import { Book } from './book.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmCrudService} from '@dataui/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export class BooksService  extends TypeOrmCrudService<Book> {
    constructor(@InjectRepository(Book) repo: Repository<Book>){
        super(repo);
    }
}