import { Router } from "express";
import { ConsignmentController } from "./Consignment.controller";
import { AuthController } from "../../Auth/Auth.controller";

const router = Router();

router.use(AuthController.protect);
router.post("/", ConsignmentController.add);

export default router;
