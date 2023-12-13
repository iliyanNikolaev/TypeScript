import { ICar } from "interfaces";
import { cars } from "./data";

export function getAllCars(): ICar[] {
    return cars;
}