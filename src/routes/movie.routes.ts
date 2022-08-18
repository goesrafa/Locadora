import { Router } from "express";
import { CreateMovieController } from "../modules/movies/createMovie/createUser/CreateMovieController"; 
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController"; 
import { GetMoviesByReleaseDateController } from './../modules/movies/getMoviesByReleaseDate/GetMoviesByReleaseDateController';

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };