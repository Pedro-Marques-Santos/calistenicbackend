import { Response, Request } from "express";

import { container } from "tsyringe";
import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const profileUserCase = container.resolve(ProfileUserUseCase);

    const user = await profileUserCase.execute({ user_id });

    return response.json(user);
  }
}

export { ProfileUserController };
