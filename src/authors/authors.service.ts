import { Author } from './author.entity';
import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm'


@Injectable()
export class AuthorsService extends TypeOrmCrudService<Author>{
    constructor(@InjectRepository(Author) repo: Repository<Author>) {
        super(repo);
    }
}