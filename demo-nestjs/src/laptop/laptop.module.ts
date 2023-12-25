import { Module } from '@nestjs/common';
import { LaptopController } from './laptop.controller';
import { LaptopService } from './laptop.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LaptopSchema } from './schemas/laptop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Laptop', schema: LaptopSchema }])],
  controllers: [LaptopController],
  providers: [LaptopService]
})
export class LaptopModule {}
