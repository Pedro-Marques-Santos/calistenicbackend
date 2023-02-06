import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import {
  IExerciseDTO,
  IExerciseRepository,
} from "../../repositories/IExerciseRepository";

@injectable()
class FindExerciseUseCase {
  constructor(
    @inject("ExerciseRepository")
    private exerciseRepository: IExerciseRepository
  ) {}

  async execute(name: string): Promise<IExerciseDTO> {
    const findexercise = await this.exerciseRepository.findByExercise(name);

    if (findexercise.existExercise === false) {
      throw new AppError("Exercise does not exist!", 401);
    }

    console.log(findexercise);

    return findexercise;
  }
}

export { FindExerciseUseCase };
