import { GetMoviesByReleaseDateController } from "./../modules/movies/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { Router } from "express";
import { CreateMovieController } from "../modules/movies/createMovie/createUser/CreateMovieController";

const createMovieController = new CreateMovieController();
const CreateMovieRentController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);

movieRoutes.post("/rent", CreateMovieRentController.handle);

movieRoutes.get("/release", getMoviesByReleaseDateController.handle);

export { movieRoutes };
