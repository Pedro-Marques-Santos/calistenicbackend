import { IUserCreateDTO } from "../dtos";
import { User } from "../model/User";

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): void;
  list(): User[];
}

export { IUserRepository };
