import { IsIn, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    @IsIn(['ADMIN', 'USER', 'EMPLOYEE' ], { message: "valid role required"})
    role: 'ADMIN' | 'USER' | 'EMPLOYEE'
}
