import { ICreateUserLogin, IUserCreateDTO, IUserLogin } from "../dtos";
import { User } from "../entities/User";

interface IUserRepository {
  findByTokenUser(bearerToken: string, password: string): Promise<User>;
  create({ name, email, password }: IUserCreateDTO): Promise<ICreateUserLogin>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<boolean>;
  login(email: string, password: string): Promise<IUserLogin>;
  findUserById(id: string): Promise<User>;
  changeMotivation(user: User, motivation: string): Promise<void>;
  findUserByEmail(email: string): Promise<User>;
}

export { IUserRepository };
