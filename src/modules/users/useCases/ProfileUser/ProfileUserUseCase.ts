import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IUserProfile {
  motivation: string;
  name: string;
  avatar: string;
}

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id }): Promise<IUserProfile> {
    let user = await this.userRepository.findUserById(user_id);

    if (!user) {
      throw new AppError("Usuário não existe!!", 401);
    }

    let userProfile = {
      motivation: user.motivation,
      name: user.name,
      avatar: user.avatar,
    } as IUserProfile;

    return userProfile;
  }
}

export { ProfileUserUseCase };
