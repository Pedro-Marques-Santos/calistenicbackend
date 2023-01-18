import { IUserCreateDTO } from "../dtos";
import { User } from "../entities/User";

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): Promise<void>;
  list(): User[];
  findByEmail(email: string): boolean;
}

export { IUserRepository };
