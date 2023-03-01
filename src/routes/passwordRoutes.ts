import { Router } from "express";
import { ResetPasswordUserController } from "../modules/users/useCases/ResetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordEmailController } from "../modules/users/useCases/SendForgotPasswordEmail/SendForgotPasswordEmailController";

const passwordRoutes = Router();

const sendForgotPasswordEmailController =
  new SendForgotPasswordEmailController();

const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/passwordForgot", (request, response) => {
  sendForgotPasswordEmailController.handle(request, response);
});

passwordRoutes.post("/passwordReset", (request, response) => {
  resetPasswordController.handle(request, response);
});

export { passwordRoutes };
