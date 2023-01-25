import { Router } from "express";
import { CreateExerciseController } from "../modules/exercises/useCases/CreateExercise/CreateExerciseController";

const createExerciseRoutes = Router();

const createExerciseController = new CreateExerciseController();

createExerciseRoutes.post("/", (request, response) => {
  return createExerciseController.handle(request, response);
});

export { createExerciseRoutes };
