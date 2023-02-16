import { ICreateUserLogin, IUserCreateDTO, IUserLogin } from "../dtos";
import { User } from "../entities/User";

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): Promise<ICreateUserLogin>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<boolean>;
  login(email: string, password: string): Promise<IUserLogin>;
  changeMotivation(id: string, motivation: string): Promise<void>;
  findUserById(id: string): Promise<User>;
}

export { IUserRepository };
