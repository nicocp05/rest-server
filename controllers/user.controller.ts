import { Request, Response } from 'express';


export const getUsers = (req: Request, res: Response) => {
    res.send("Hello");
} 

export const postUsers = (req: Request, res: Response) => {

    const body = req.body;
    console.log(body);
    res.json(body);
} 

export const putUsers = (req: Request, res: Response) => {
    res.send("Hola World");
} 

export const deleteUsers = (req: Request, res: Response) => {
    res.send("Hola World");
} 