import { NextFunction, Request, Response, Router } from "express";
import { createUser, getUserById, getConnectionsByUserId, getUsers } from "../services/userService";
import { UserType } from "../models/User";
import { createPost, getPosts, getPostsByUserId } from "../services/postService";
import { PostType } from "models/Post";

export const apiController: Router = Router();

apiController
//all users
    .get('/users', async (req, res) => {
        const users = await getUsers();
        res.json(users);
    })
//regiser
    .post('/users', apiCreateUserDto, async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        const created = await createUser({ firstName, lastName, email, password } as UserType); 
        //this data has been validated in apiCreateUserDto
        res.json(created);
    })
//profile -> userInfo, userPosts 
    .get('/profile/:id', async (req, res) => {
        const user = await getUserById(req.params.id);
        const posts = await getPostsByUserId(req.params.id);
        if (user) {
            res.json([user, posts]);
        } else {
            res.status(400).json({ message: "missing user" });
        }
    })
//connections for user
    .get('/connections/:userId', async (req, res) => {
        const connections = await getConnectionsByUserId(req.params.userId);
        res.json(connections);
    })
//all posts
    .get('/posts', async (req, res) => {
        const posts = await getPosts();
        res.json(posts);
    })
//create post
    .post('/posts', apiCreatePostDto, async (req: Request, res: Response) => {
        const { owner, textContent, img } = req.body;
        await createPost({ owner, textContent, img } as PostType);
        //this data has been validated in createPostDto
        res.redirect('/posts');
    });

// api-middlewares
function apiCreateUserDto(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, email, password } = req.body;

    const isInvalid = !firstName
        || !lastName
        || !email
        || !password

    if (isInvalid) {
        res.status(400).json({message: 'invalid data'});
    } else {
        next();
    }
}

export function apiCreatePostDto(req: Request, res: Response, next: NextFunction) {
    const { owner, textContent } = req.body;

    const isInvalid = !owner
        || !textContent

    if (isInvalid) {
        res.status(400).json({message: 'invalid data'});
    } else {
        next();
    }
}