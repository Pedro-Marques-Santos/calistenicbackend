import { Router } from "express";
import { changeMotivationRoutes } from "./changeMotivationRoutes";
import { createExerciseRoutes } from "./createExerciseRoutes";
import { createUserRoutes } from "./createUserRoutes";
import { findExerciseRoutes } from "./findExerciseRoutes";
import { listUserRoutes } from "./listUserRoutes";
import { loginUserRoutes } from "./loginUserRoutes";
import { passwordRoutes } from "./passwordRoutes";
import { profileUserRoutes } from "./profileUserRoutes";
import { updateUserAvatarRoutes } from "./updateUserAvatarRoutes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);
router.use("/loginUser", loginUserRoutes);
router.use("/createExercise", createExerciseRoutes);
router.use("/findByExercise", findExerciseRoutes);
router.use("/profileUser", profileUserRoutes);
router.use("/changeMotivation", changeMotivationRoutes);
router.use("/avatar", updateUserAvatarRoutes);
router.use("/", passwordRoutes);

export { router };
