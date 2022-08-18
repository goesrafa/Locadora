import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateMovieRentDTO } from "../dtos/CreateMovieRentDTO";

export class CreateMovieRenteUeseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO) : Promise<void>{
    //verificar se o filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }

    //verificar se já não está alugado
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    //verificar a existencia do usuário
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not  exist!");
    }

    //criar a locação
    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
