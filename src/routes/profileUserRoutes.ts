import { Router } from "express";
import multer from "multer";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

import { ProfileUserController } from "../modules/users/useCases/ProfileUser/ProfileUserController";

const profileUserRoutes = Router();

const profileUserController = new ProfileUserController();

profileUserRoutes.post("/", ensureAuthentication, (request, response) => {
  return profileUserController.handle(request, response);
});

export { profileUserRoutes };
