import { container } from "tsyringe";
import { IExerciseRepository } from "../modules/exercises/repositories/IExerciseRepository";
import { ExerciseRepository } from "../modules/exercises/repositories/implemantation/ExerciseRepository";
import { UserRepository } from "../modules/users/repositories/implemantation/UserRepository";
import { IUserRepository } from "../modules/users/repositories/IUserRepository";
import { IEmailProvider } from "./container/providers/EmailProvider/IEmailProvider";
import { EtherealEmailProvider } from "./container/providers/EmailProvider/implementations/EtherealEmailProvider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IExerciseRepository>(
  "ExerciseRepository",
  ExerciseRepository
);

container.registerSingleton<IEmailProvider>(
  "EtherealEmailProvider",
  EtherealEmailProvider
);
