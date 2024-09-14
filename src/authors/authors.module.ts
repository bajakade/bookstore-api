import { Author } from './author.entity';
import {AuthorsController}  from './authors.controller'
import {AuthorsService} from './authors.service'
import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([Author])],
    controllers: [AuthorsController],
    providers: [AuthorsService]
})
export class AuthorsModule {}