import { inject, injectable } from "tsyringe";
import { ICreateExerciseDTO } from "../../repositories/IExerciseRepository";
import { ExerciseRepository } from "../../repositories/implemantation/ExerciseRepository";

@injectable()
class CreateExerciseUseCase {
  constructor(
    @inject("ExerciseRepository")
    private exerciseRepository: ExerciseRepository
  ) {}

  async execute({
    name,
    level,
    muscules,
    description,
  }: ICreateExerciseDTO): Promise<void> {
    await this.exerciseRepository.create({
      name,
      level,
      muscules,
      description,
    });
  }
}

export { CreateExerciseUseCase };
