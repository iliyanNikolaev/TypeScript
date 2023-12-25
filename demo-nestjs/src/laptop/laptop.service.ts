import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Laptop } from './schemas/laptop.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class LaptopService {
    constructor(
        @InjectModel(Laptop.name)
        private laptopModel: mongoose.Model<Laptop>
    ){}

    async findAll(): Promise<Laptop[]> {
        return this.laptopModel.find();
    }
    async create(laptop: Laptop): Promise<Laptop> {
        return this.laptopModel.create(laptop);
    }
    async getById(id: string): Promise<Laptop> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('laptop not found');
        return this.laptopModel.findById(id);
    }
    async editById(id: string, data: Laptop): Promise<Laptop> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('laptop not found');
        await this.laptopModel.findByIdAndUpdate(id, data);

        return this.laptopModel.findById(id); // this is the edited record
    }
    async deleteById(id: string): Promise<{ ok: true }> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('laptop not found');
        const laptop = await this.laptopModel.findByIdAndDelete(id);
        if (!laptop) throw new NotFoundException('laptop not found');
        return { ok: true };
    }      
}
