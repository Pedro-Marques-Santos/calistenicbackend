import { inject, injectable } from "tsyringe";
import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  execute(): User[] {
    let users = this.userRepository.list();
    return users;
  }
}

export { ListUserUseCase };
