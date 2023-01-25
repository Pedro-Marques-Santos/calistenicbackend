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

    const user = await this.userRepository.create({ name, password, email });

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

    let createUserToken = {
      token: token,
      name: user.name,
    } as ICreateUserToken;

    return createUserToken;
  }
}

export { CreateUserUseCase };
