import {
  ICreateUserLogin,
  IProfileUserDTO,
  ITokenData,
  IUserCreateDTO,
  IUserLogin,
} from "../../dtos";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

import jwt from "jsonwebtoken";

import { getRepository, Repository } from "typeorm";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async changeMotivation(id: string, motivation: string): Promise<void> {
    const user = await this.userRepository.findOne({
      id: id,
    });

    user.motivation = motivation;

    await this.userRepository.save(user);
  }

  async profileUser(token: string): Promise<IProfileUserDTO> {
    let userProfile = {
      userExistToken: false,
    } as IProfileUserDTO;

    let tokenData = jwt.decode(token) as ITokenData;

    let allUser = await this.userRepository.find();

    allUser.map((user) => {
      if (
        user.email === tokenData.email &&
        user.password === tokenData.password
      ) {
        userProfile = {
          userExistToken: true,
          name: user.name,
          motivation: user.motivation,
          id: user.id,
        };
      }
    });

    return userProfile;
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

  async create({
    name,
    email,
    password,
  }: IUserCreateDTO): Promise<ICreateUserLogin> {
    const user = this.userRepository.create({
      name,
      email,
      password,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export { UserRepository };
