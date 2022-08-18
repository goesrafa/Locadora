import { Request, Response } from "express";
import { CreateMovieRenteUeseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { movieId, userId } = req.body;

    const createMovieRentUseCase = new CreateMovieRenteUeseCase();

    await createMovieRentUseCase.execute({
      movieId,
      userId,
    });

    return res.status(201).send();
  }
}
