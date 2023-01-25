import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IUserToken } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

import jwt from "jsonwebtoken";

@injectable()
class LoginUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(email: string, password: string): Promise<IUserToken> {
    const exist = await this.userRepository.findByEmail(email);

    if (exist === false) {
      throw new AppError("Unregistered email!", 401);
    }

    const user = await this.userRepository.login(email, password);

    if (!user.verifyLogin) {
      throw new AppError("email or password are incorret!", 401);
    }

    const secretKey = "6392241ff0d34";

    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      secretKey,
      {
        expiresIn: "2h",
        subject: "1",
      }
    );

    const userToken = {
      name: user.name,
      token: token,
    } as IUserToken;

    return userToken;
  }
}

export { LoginUserUseCase };
