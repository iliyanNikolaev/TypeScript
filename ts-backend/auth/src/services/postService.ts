import { Post, PostType } from '../models/Post';

export async function getPosts() {
    const posts = await Post.find({})
        .populate('owner', ['firstName', 'lastName', '_id', 'profilePic'])
        .lean();
    return posts;
}

export async function getPostById(id: string) {
    // const user = await User.findById(id).select(selectUserProps).lean();
    // return user;
}

export async function createPost(postData: PostType) {
    const { _id, textContent, img } = await Post.create(postData);
    return { _id, textContent, img };
}

export async function getPostsByUserId(id: string) {
    const posts = await Post.find({ owner: id })
        .populate({ path: 'owner', select: 'firstName' })
        .populate({ path: 'owner', select: 'lastName' })
        .populate({ path: 'owner', select: '_id' })
        .populate({ path: 'owner', select: 'profilePic' })
        .lean();
    return posts;
}