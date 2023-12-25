import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateLaptopDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly desc: string

    @IsNumber()
    readonly price: number
}