import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    let users = this.userRepository.list();
    return users;
  }
}

export { ListUserUseCase };
