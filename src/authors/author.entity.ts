import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'

import { Book } from 'src/books/book.entity';

@Entity()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @ManyToMany(() => Book, (book) => book.authors)
    books: Book[];
}