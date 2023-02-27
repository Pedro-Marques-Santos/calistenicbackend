import { ICreateUserLogin, IUserCreateDTO, IUserLogin } from "../../dtos";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

import { getRepository, Repository } from "typeorm";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async changeMotivation(user: User, motivation: string): Promise<void> {
    user.motivation = motivation;

    await this.userRepository.save(user);
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      id: id,
    });

    return user;
  }

  async login(email: string, password: string): Promise<IUserLogin> {
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
          id: user.id,
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

  //o create ele cria e tmb edita, no caso quando estamos utilizando o avatar, pois já vem com o id e avatar
  async create({
    name,
    email,
    password,
    id,
    avatar,
  }: IUserCreateDTO): Promise<ICreateUserLogin> {
    const user = this.userRepository.create({
      name,
      email,
      password,
      id,
      avatar,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export { UserRepository };
