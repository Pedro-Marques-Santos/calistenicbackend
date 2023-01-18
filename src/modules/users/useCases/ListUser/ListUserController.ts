import { Response, Request } from "express";

import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  handle(request: Request, response: Response): Response {
    const listUserUseCase = container.resolve(ListUserUseCase);

    const list = listUserUseCase.execute();

    return response.json(list);
  }
}

export { ListUserController };
