import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
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
      throw new AppError("Email already registered!", 401);
    }

    await this.userRepository.create({ name, password, email });
  }
}

export { CreateUserUseCase };
