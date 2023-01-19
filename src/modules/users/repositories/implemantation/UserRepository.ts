import { IUserCreateDTO, IUserLogin } from "../../dtos";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

import { getRepository, Repository } from "typeorm";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async login(email: string, password): Promise<IUserLogin> {
    let login = {
      verifyLogin: false,
    } as IUserLogin;

    let listUser = await this.userRepository.find();

    listUser.map((user) => {
      if (user.email === email && user.password === password) {
        login = {
          verifyLogin: true,
          email: user.email,
          password: user.password,
          name: user.name,
        };
      }
    });

    return login;
  }

  async findByEmail(email: string): Promise<boolean> {
    let existUser = false;
    let listUser = await this.userRepository.find();
    listUser.map((user) => {
      if (user.email === email) {
        existUser = true;
      }
    });
    return existUser;
  }

  async list(): Promise<User[]> {
    const list = await this.userRepository.find();

    return list;
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
