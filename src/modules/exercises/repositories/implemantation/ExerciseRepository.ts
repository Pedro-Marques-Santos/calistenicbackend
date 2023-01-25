import { getRepository, Repository } from "typeorm";
import { Exercise } from "../../entities/exercise";
import {
  ICreateExerciseDTO,
  IExerciseDTO,
  IExerciseRepository,
  IFindByExercise,
} from "../IExerciseRepository";

class ExerciseRepository implements IExerciseRepository {
  private exerciseRepository: Repository<Exercise>;

  constructor() {
    this.exerciseRepository = getRepository(Exercise);
  }

  async findByExercise(name: string): Promise<IExerciseDTO> {
    let findexercise = {
      existExercise: false,
    } as IExerciseDTO;

    const list = await this.exerciseRepository.find();
    list.map((exercise: IFindByExercise) => {
      if (exercise.name === name) {
        findexercise = {
          existExercise: true,
          typeexercise: exercise,
        };
      }
    });

    return findexercise;
  }

  async create({
    name,
    level,
    muscules,
    description,
  }: ICreateExerciseDTO): Promise<void> {
    const exercise = this.exerciseRepository.create({
      name,
      level,
      muscules,
      description,
    });
    await this.exerciseRepository.save(exercise);
  }
}

export { ExerciseRepository };
