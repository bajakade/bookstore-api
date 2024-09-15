import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

import {Author} from '../authors/author.entity'

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;

    @ManyToMany(() => Author, (author) => author.books)
    @JoinTable()
    authors: Author[];

    @Column({type: 'date'})
    publishDate: string;
}