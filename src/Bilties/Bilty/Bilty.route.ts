import { Router } from "express";
import { BiltyController } from "./Bilty.controller";
import { AuthController } from "../../Auth/Auth.controller";

const router = Router();

router.use(AuthController.protect);
router.post("/", BiltyController.add);

export default router;
