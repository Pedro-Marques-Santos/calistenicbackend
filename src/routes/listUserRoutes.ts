import { Router } from "express";
import { ListUserController } from "../modules/users/useCases/ListUser/ListUserController";

const listUserRoutes = Router();

const listUserController = new ListUserController();

listUserRoutes.get("/", (request, respose) => {
  return listUserController.handle(request, respose);
});

export { listUserRoutes };
