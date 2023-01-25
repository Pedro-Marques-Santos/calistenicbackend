import { Response, Request } from "express";

import { container } from "tsyringe";
import { FindExerciseUseCase } from "./FindExerciseUseCase";

class FindExerciseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const findExerciseUseCase = container.resolve(FindExerciseUseCase);

    const exercise = await findExerciseUseCase.execute(name);

    return response.json(exercise);
  }
}

export { FindExerciseController };
