import { Router, Request, Response } from "express";
import { getUserById, getUsers } from "../services/userService";
import { createUser } from "../services/userService";
import { createUserDto } from "../middlewares/dto/createUserDto";
import { UserType } from "../models/User";
import { getPostsByUserId } from "../services/postService";

export const usersController: Router = Router();
usersController.get('/', async (req: Request, res: Response) => {
    const users = await getUsers();
    res.render('users', {
        users
    });
});

usersController.post('/', createUserDto, async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    await createUser({ firstName, lastName, email, password } as UserType);
    //this data has been validated in createUserDto
    res.redirect('/users');
});

usersController.get('/:id', async (req: Request, res: Response) => {
    const user = await getUserById(req.params.id);
    const posts = await getPostsByUserId(req.params.id);

    if (user) {
        res.render('profile', { user, posts });
    } else {
        res.render('missingUser', {
            id: req.params.id
        });
    }
});
