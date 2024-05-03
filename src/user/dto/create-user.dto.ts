import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
import { Roles } from '../roles.enum';
  
  
  export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    @IsAlphanumeric('en-US',{
      message: 'Username does not allow other than alpha numeric chars.',
    })
    username: string;
  
    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide valid Email.' })
    email: string;
  
    @IsInt()
    age: number;
  
    @IsString()
    @IsEnum(Roles)
    rol: string;
  
    @IsNotEmpty()
    password: string;
  }