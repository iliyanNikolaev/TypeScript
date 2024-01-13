import { Schema, Types, model } from "mongoose";

const commentSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }, //ref -> User populate id, firstName, lastName, profilePic
    textContent: { type: String, required: true },
    postId: {type: String, required: true }
});

export const Comment = model('Comment', commentSchema);

export type CommentType = {
    owner: string, //ref -> User populate id, firstName, lastName, profilePic
    textContent: string,
    postId: string,
}