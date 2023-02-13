import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class MotivationUserCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, motivation: string): Promise<void> {
    await this.userRepository.changeMotivation(id, motivation);
  }
}

export { MotivationUserCase };
