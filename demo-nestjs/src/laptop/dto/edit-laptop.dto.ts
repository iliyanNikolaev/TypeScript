import { IsNumber, IsOptional, IsString } from "class-validator"

export class EditLaptopDto {
    @IsOptional()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsString()
    readonly desc: string

    @IsOptional()
    @IsNumber()
    readonly price: number
}