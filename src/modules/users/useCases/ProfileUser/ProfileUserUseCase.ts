import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IProfileUserDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(token: string): Promise<IProfileUserDTO> {
    let user = await this.userRepository.profileUser(token);

    if (user.userExistToken === false) {
      throw new AppError(
        "Token foi expirado, você deve fazer login novamente!",
        401
      );
    }

    return user;
  }
}

export { ProfileUserUseCase };
