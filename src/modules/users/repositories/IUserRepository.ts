import { IUserCreateDTO } from "../dtos";
import { User } from "../entities/User";

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): Promise<void>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<boolean>;
}

export { IUserRepository };
