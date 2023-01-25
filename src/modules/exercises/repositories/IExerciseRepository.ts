interface ICreateExerciseDTO {
  name: string;
  level: string;
  muscules: string;
  description: string;
}

interface IExerciseDTO {
  existExercise: boolean;
  typeexercise?: IFindByExercise;
}

interface IFindByExercise {
  id: string;
  name: string;
  level: string;
  muscules: string;
  description: string;
}

interface IExerciseRepository {
  create({
    name,
    level,
    muscules,
    description,
  }: ICreateExerciseDTO): Promise<void>;
  findByExercise(name: string): Promise<IExerciseDTO>;
}

export {
  IExerciseRepository,
  ICreateExerciseDTO,
  IFindByExercise,
  IExerciseDTO,
};
