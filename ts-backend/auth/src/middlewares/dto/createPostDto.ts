import { NextFunction, Request, Response } from "express";

export function createPostDto(req: Request, res: Response, next: NextFunction) {
    const { owner, textContent } = req.body;

    const isInvalid = !owner
        || !textContent

    if (isInvalid) {
        res.render('invalidData');
    } else {
        next();
    }
}