import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Laptop {
    @Prop()
    title: string;

    @Prop()
    desc: string;

    @Prop()
    price: number;
}

export const LaptopSchema = SchemaFactory.createForClass(Laptop);
