import { Router, Request, Response } from "express";
import { getById } from "../services/userService";

export const detailsController: Router = Router();

detailsController.get('/:id', async (req: Request, res: Response) => {
    const user = await getById(req.params.id);

    if (user) {
        res.render('details', {
            user,
            helpers: {
               parseUserRole
            }
        });
    } else {
        res.render('missingUser', {
            id: req.params.id
        });
    }
});

function parseUserRole(role: string): string {
    switch (role) {
        case 'ADM': return 'admin';
        case 'EMP': return 'employee';
        case 'STU': return 'student';
        default: return 'unknown';
    }
}