import { IUserCreateDTO } from "../../dtos";
import { User } from "../../model/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private allPessoas: User[] = [];

  constructor() {
    this.allPessoas = [];
  }

  list(): User[] {
    return this.allPessoas;
  }

  create({ name, email, password }: IUserCreateDTO): void {
    const user = new User();

    user.email = email;
    user.name = name;
    user.password = password;

    this.allPessoas.push(user);
  }
}

export { UserRepository };
