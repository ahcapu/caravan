import { Router } from "express";
import { BiltyDetailController } from "./BiltyDetail.controller";
import { AuthController } from "../../Auth/Auth.controller";

const router = Router();

router.use(AuthController.protect);
router.post("/", BiltyDetailController.add);

export default router;
