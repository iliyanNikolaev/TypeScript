import { Request, Response } from 'express';
import { getAllCars } from '../model/service';

export function renderHomePage(req: Request, res: Response) {
    res.render('home');
}

export async function renderCatalogPage(req: Request, res: Response) {
    const cars = await getAllCars();
    
    res.render('catalog', { cars: cars });
}

export function renderAboutPage(req: Request, res: Response) {
    res.render('about');
}