import { inject, injectable } from "tsyringe";
import { IUserCreateDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, password, email }: IUserCreateDTO): Promise<void> {
    const exist = await this.userRepository.findByEmail(email);

    if (exist === true) {
      throw new Error("Email already registered!");
    }

    await this.userRepository.create({ name, password, email });
  }
}

export { CreateUserUseCase };
