import { Router } from "express";
import { createExerciseRoutes } from "./createExerciseRoutes";
import { createUserRoutes } from "./createUserRoutes";
import { findExerciseRoutes } from "./findExerciseRoutes";
import { listUserRoutes } from "./listUserRoutes";
import { loginUserRoutes } from "./loginUserRoutes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);
router.use("/loginUser", loginUserRoutes);
router.use("/createExercise", createExerciseRoutes);
router.use("/findByExercise", findExerciseRoutes);

export { router };
