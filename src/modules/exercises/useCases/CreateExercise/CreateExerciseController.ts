import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateExerciseUseCase } from "./CreateExerciseUseCase";

class CreateExerciseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, level, muscules, description } = request.body;

    const createExerciseUseCase = container.resolve(CreateExerciseUseCase);

    await createExerciseUseCase.execute({ name, level, muscules, description });

    return response.status(201).send();
  }
}

export { CreateExerciseController };
