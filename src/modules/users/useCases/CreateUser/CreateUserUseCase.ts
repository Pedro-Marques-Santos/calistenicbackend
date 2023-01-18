import { inject, injectable } from "tsyringe";
import { IUserCreateDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  execute({ name, password, email }: IUserCreateDTO): void {
    this.userRepository.create({ name, password, email });
  }
}

export { CreateUserUseCase };
