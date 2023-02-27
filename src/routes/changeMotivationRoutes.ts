import { Router } from "express";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { MotivationUserController } from "../modules/users/useCases/motivationUser/MotivationUserController";

const changeMotivationRoutes = Router();

const motivationUserController = new MotivationUserController();

changeMotivationRoutes.patch("/", ensureAuthentication, (request, response) => {
  motivationUserController.handle(request, response);
});

export { changeMotivationRoutes };
