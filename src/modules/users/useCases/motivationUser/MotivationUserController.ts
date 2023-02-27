import { Response, Request } from "express";

import { container } from "tsyringe";
import { MotivationUserCase } from "./MotivationUserUseCase";

class MotivationUserController {
  async handle(request: Request, respose: Response) {
    const { motivation } = request.body;
    const { id: user_id } = request.user;

    const motivationUserUseCase = container.resolve(MotivationUserCase);

    await motivationUserUseCase.execute(user_id, motivation);

    return respose.status(204).send();
  }
}

export { MotivationUserController };
