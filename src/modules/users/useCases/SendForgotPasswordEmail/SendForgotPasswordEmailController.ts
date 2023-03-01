import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPasswordEmailUseCase } from "./SendForgetPasswordUseCase";

class SendForgotPasswordEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmailUseCase = container.resolve(
      SendForgotPasswordEmailUseCase
    );

    sendForgotPasswordEmailUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPasswordEmailController };
