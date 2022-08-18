import { Router } from "express";
import { CreateUserController } from "../modules/user/userCase/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/user/userCase/getAllUsers/GetAllUsersController";


const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes}