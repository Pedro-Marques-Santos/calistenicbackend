import { Response, Request } from "express";

import { container } from "tsyringe";
import { MotivationUserCase } from "./MotivationUserUseCase";

class MotivationUserController {
  handle(request: Request, respose: Response) {
    const { id, motivation } = request.body;

    const motivationUserUseCase = container.resolve(MotivationUserCase);

    motivationUserUseCase.execute(id, motivation);

    return respose.status(201).send();
  }
}

export { MotivationUserController };
