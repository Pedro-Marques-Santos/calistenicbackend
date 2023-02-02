import { Response, Request } from "express";

import { container } from "tsyringe";
import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;

    const profileUserCase = container.resolve(ProfileUserUseCase);

    const user = await profileUserCase.execute(token);

    return response.json(user);
  }
}

export { ProfileUserController };
