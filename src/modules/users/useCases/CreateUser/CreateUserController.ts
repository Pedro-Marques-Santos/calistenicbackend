import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    const user = await createUseCase.execute({ name, email, password });

    return response.json(user);
  }
}

export { CreateUserController };
