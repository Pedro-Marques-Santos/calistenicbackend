import {
  ICreateUserLogin,
  IProfileUserDTO,
  IUserCreateDTO,
  IUserLogin,
} from "../dtos";
import { User } from "../entities/User";

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): Promise<ICreateUserLogin>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<boolean>;
  login(email: string, password: string): Promise<IUserLogin>;
  profileUser(token: string): Promise<IProfileUserDTO>;
}

export { IUserRepository };
