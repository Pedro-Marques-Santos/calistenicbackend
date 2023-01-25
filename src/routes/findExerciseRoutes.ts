import { Router } from "express";
import { FindExerciseController } from "../modules/exercises/useCases/FindExercise/FindExerciseController";

const findExerciseRoutes = Router();

const findExerciseController = new FindExerciseController();

findExerciseRoutes.post("/", (request, response) => {
  return findExerciseController.handle(request, response);
});

export { findExerciseRoutes };
