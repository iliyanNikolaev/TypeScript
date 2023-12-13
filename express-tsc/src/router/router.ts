import { renderAboutPage, renderCatalogPage, renderHomePage } from "../controller/controller";
import { Router } from "express";

export const router = Router();

router.get('/', renderHomePage);

router.get('/catalog', renderCatalogPage);

router.get('/about', renderAboutPage);
