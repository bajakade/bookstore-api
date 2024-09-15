import {IsDateString, IsString} from 'class-validator';

export class CreateBookDto {
    @IsString()
    title: string;
    
    @IsString()
    author:  string;

    @IsDateString()
    publishDate: string;
}