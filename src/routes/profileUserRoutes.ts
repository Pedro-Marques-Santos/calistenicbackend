import { Router } from "express";
import { ProfileUserController } from "../modules/users/useCases/ProfileUser/ProfileUserController";

const profileUserRoutes = Router();

const profileUserController = new ProfileUserController();

profileUserRoutes.post("/", (request, response) => {
  return profileUserController.handle(request, response);
});

export { profileUserRoutes };
