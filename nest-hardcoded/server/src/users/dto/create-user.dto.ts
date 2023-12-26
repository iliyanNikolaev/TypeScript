export class CreateUserDto {
    username: string
    password: string
    role: 'ADMIN' | 'USER' | 'EMPLOYEE'
}
