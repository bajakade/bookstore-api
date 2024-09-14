import {IsEmail, IsString, Length} from 'class-validator';

export class AuthLoginDto  {
    @IsEmail()
    username: string;

    @IsString()
    @Length(8)
    password: string;
}