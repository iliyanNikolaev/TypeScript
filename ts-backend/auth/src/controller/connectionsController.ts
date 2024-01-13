import { Request, Response, Router } from "express";
import { getConnectionsByUserId } from "../services/userService";

export const connectionsController: Router = Router();

connectionsController.get('/:id', async (req: Request, res: Response) => {
    const connections = await getConnectionsByUserId(req.params.id);
    res.render('connections', { connections });
})