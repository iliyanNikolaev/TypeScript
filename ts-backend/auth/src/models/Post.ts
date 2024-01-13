import { Schema, Types, model } from "mongoose";

const postSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }, 
    textContent: { type: String, required: true },
    img: String,
    likes: {
        type: [Types.ObjectId],
        default: [],
        ref: 'User'
    }, 
    comments: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Comment'
    }
});

export const Post = model('Post', postSchema);

export type PostType = {
    owner: string,
    textContent: string,
    img?: string,
    likes: string[], 
    comments: string[]
}