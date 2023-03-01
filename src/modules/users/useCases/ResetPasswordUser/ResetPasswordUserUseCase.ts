import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ token, password }: IRequest) {
    const user = await this.userRepository.findByTokenUser(token, password);

    if (!user) {
      throw new AppError("Usuário inválido!", 404);
    }

    user.password = password;

    await this.userRepository.create(user);
  }
}

export { ResetPasswordUserUseCase };
