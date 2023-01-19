import { Router } from "express";
import { createUserRoutes } from "./createUserRoutes";
import { listUserRoutes } from "./listUserRoutes";
import { loginUserRoutes } from "./loginUserRoutes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);
router.use("/loginUser", loginUserRoutes);

export { router };
