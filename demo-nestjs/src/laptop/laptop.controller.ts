import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LaptopService } from './laptop.service';
import { Laptop } from './schemas/laptop.schema';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { EditLaptopDto } from './dto/edit-laptop.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('laptops')
export class LaptopController {
    constructor(private laptopService: LaptopService) { }

    @Get()
    async getAllLaptops(
        @Query() query: ExpressQuery
    ): Promise<Laptop[]> {
        return this.laptopService.findAll(query);
    }
    @Post()
    async createLaptop(
        @Body()
        laptop: CreateLaptopDto
    ): Promise<Laptop> {

        return this.laptopService.create(laptop);
    }
    @Get(':id')
    async getLaptopById(
        @Param('id')
        id: string
    ): Promise<Laptop> {
        const laptop = await this.laptopService.getById(id);
        return laptop;
    }
    @Put(':id')
    async editLaptopById(
        @Param('id')
        id: string,
        @Body()
        laptop: EditLaptopDto
    ): Promise<Laptop> {

        return this.laptopService.editById(id, laptop);
    }
    @Delete(':id')
    async deleteLaptopById(
        @Param('id')
        id: string,
    ): Promise<{ ok: true }> {
        return this.laptopService.deleteById(id);
    }
}
