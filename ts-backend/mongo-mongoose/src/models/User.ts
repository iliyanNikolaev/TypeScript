import { Schema, Types, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    coverPic: { type: String, default: '/img/cover-pic.png' },
    profilePic: { type: String, default: '/img/profile-pic.png' },
    connections: {
        type: [Types.ObjectId],
        default: [],
        ref: 'User'
    }
});

export const User = model('User', userSchema);

export type UserType = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: string[]
}