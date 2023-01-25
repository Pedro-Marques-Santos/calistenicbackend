import { Router } from "express";
import { LoginUserController } from "../modules/users/useCases/LoginUser/LoginUserController";

const loginUserRoutes = Router();

const loginUserController = new LoginUserController();

loginUserRoutes.post("/", (request, respose) => {
  return loginUserController.handle(request, respose);
});

export { loginUserRoutes };
