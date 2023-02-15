import { Router } from "express";
import multer from "multer";

import { UpdateUserAvatarController } from "../modules/users/useCases/UpdateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

const updateUserAvatarRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const updateUserAvatarController = new UpdateUserAvatarController();

updateUserAvatarRoutes.patch(
  "/",
  ensureAuthentication,
  uploadAvatar.single("avatar"),
  (request, response) => {
    updateUserAvatarController.handle(request, response);
  }
);

export { updateUserAvatarRoutes };
