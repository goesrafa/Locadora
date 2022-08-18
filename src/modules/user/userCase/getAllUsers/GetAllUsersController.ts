import { Request, Response } from "express";
import { GetAllUsersCase } from "./GetAllUsersCase";

export class GetAllUsersController{
    async handle(req: Request, res: Response){
        const getAllUsersUseCase = new GetAllUsersCase();

        const result = await getAllUsersUseCase.execute();

        return res.status(201).json(result);
    }
}