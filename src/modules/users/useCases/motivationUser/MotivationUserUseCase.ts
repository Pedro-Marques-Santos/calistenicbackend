import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class MotivationUserCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(user_id: string, motivation: string): Promise<void> {
    const user = await this.userRepository.findUserById(user_id);

    if (!user) {
      throw new Error("Usuário não existe!");
    }

    await this.userRepository.changeMotivation(user, motivation);
  }
}

export { MotivationUserCase };
