import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/CreateUser/CreateUserController";

const createUserRoutes = Router();

const createUserController = new CreateUserController();

createUserRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

export { createUserRoutes };
