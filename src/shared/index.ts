import { container } from 'tsyringe';
import { UserRepository } from '../modules/users/repositories/implemantation/UserRepository';
import { IUserRepository } from '../modules/users/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
  "UserRepository", UserRepository
);