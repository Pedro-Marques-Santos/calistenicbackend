import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateUserLogin, ICreateUserToken, IUserCreateDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

import jwt from "jsonwebtoken";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    password,
    email,
  }: IUserCreateDTO): Promise<ICreateUserToken> {
    const exist = await this.userRepository.findByEmail(email);

    if (exist === true) {
      throw new AppError("Email already registered!", 401);
    }

    const secretKey = "6392241ff0d34";

    await this.userRepository.create({ name, password, email });

    const user = await this.userRepository.login(email, password);

    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      secretKey,
      {
        expiresIn: "2h",
        subject: user.id,
      }
    );

    let createUserToken = {
      token: token,
    } as ICreateUserToken;

    return createUserToken;
  }
}

export { CreateUserUseCase };
