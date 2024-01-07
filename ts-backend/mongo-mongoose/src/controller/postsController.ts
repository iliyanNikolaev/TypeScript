import { Router, Request, Response } from "express";
import { createPostDto } from "../middlewares/dto/createPostDto";
import { createPost, getPosts } from "../services/postService";
import { PostType } from "../models/Post";

export const postsController: Router = Router();

postsController.get('/', async (req: Request, res: Response) => {
    const posts = await getPosts();
    res.render('posts', { posts });
});

postsController.post('/', createPostDto, async (req: Request, res: Response) => {
    const { owner, textContent, img } = req.body;
    await createPost({ owner, textContent, img } as PostType);
    //this data has been validated in createPostDto
    res.redirect('/posts');
});