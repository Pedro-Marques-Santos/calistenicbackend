import { Router } from "express";
import { createUserRoutes } from "./createUserRoutes";
import { listUserRoutes } from "./listUserRoutes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);

export { router };
