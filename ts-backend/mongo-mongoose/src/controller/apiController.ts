import { NextFunction, Request, Response, Router } from "express";
import { createUser, getUserById, getConnectionsByUserId, getUsers } from "../services/userService";
import { UserType } from "../models/User";
import { getPosts } from "../services/postService";

export const apiController: Router = Router();

apiController
    .get('/users', async (req, res) => {
        const users = await getUsers();
        res.json(users);
    })
    .post('/users', apiCreateUserDto, async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        const created = await createUser({ firstName, lastName, email, password } as UserType); 
        //this data has been validated in apiCreateUserDto
        res.json(created);
    })
    .get('/users/:id', async (req, res) => {
        const user = await getUserById(req.params.id);

        if (user) {
            res.json(user);
        } else {
            res.status(400).json({ message: "missing user" });
        }
    })
    .get('/connections/:userId', async (req, res) => {
        const connections = await getConnectionsByUserId(req.params.userId);
        res.json(connections);
    })
    .get('/posts', async (req, res) => {
        const posts = await getPosts();
        res.json(posts);
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
