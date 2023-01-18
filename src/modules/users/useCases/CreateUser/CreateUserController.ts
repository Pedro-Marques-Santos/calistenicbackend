import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    createUseCase.execute({ name, email, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
