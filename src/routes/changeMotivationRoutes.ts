import { Router } from "express";
import { MotivationUserController } from "../modules/users/useCases/motivationUser/MotivationUserController";

const changeMotivationRoutes = Router();

const motivationUserController = new MotivationUserController();

changeMotivationRoutes.post("/", (request, response) => {
  motivationUserController.handle(request, response);
});

export { changeMotivationRoutes };
