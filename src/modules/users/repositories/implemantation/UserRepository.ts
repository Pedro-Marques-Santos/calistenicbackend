import { IUserCreateDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

import { getRepository, Repository } from "typeorm";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;
  private allPessoas: User[] = [];

  constructor() {
    this.userRepository = getRepository(User);
    this.allPessoas = [];
  }

  findByEmail(email: string): boolean {
    let existUser = false;
    this.allPessoas.map((user) => {
      if (user.email === email) {
        existUser = true;
      }
    });
    return existUser;
  }

  list(): User[] {
    return this.allPessoas;
  }

  async create({ name, email, password }: IUserCreateDTO): Promise<void> {
    const user = this.userRepository.create({
      name,
      email,
      password,
    });

    await this.userRepository.save(user);
  }
}

export { UserRepository };
