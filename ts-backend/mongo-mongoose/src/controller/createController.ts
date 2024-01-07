import { Router, Request, Response } from "express";
import { create } from "../services/userService";

export const createController: Router = Router();

createController.get('/', (req: Request, res: Response) => {
    res.render('create');
});

createController.post('/', async (req: Request, res: Response) => {
    const { name, email, role } = req.body;
    const isInvalid = !name || !email || !role;

    if (isInvalid) {
        res.render('invalidData');
    } else {
        await create({ name, email, role });
        res.redirect('/');
    }
});