import { NextFunction, Request, Response } from "express";

export function createUserDto(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, email, password } = req.body;

    const isInvalid = !firstName
        || !lastName
        || !email
        || !password

    if (isInvalid) {
        res.render('invalidData');
    } else {
        next();
    }
}