import { Router } from "express";
import { AdminController } from "./Admin.controller";
import { CompanyProfileController } from "../CompanyProfile/CompanyProfile.controller";
import { AuthController } from "../../Auth/Auth.controller";

const router = Router();

router.post("/signup", AdminController.adminSignup);
router.post("/signin", AdminController.adminSignin);

router.post("/company-profiles", AuthController.protect, CompanyProfileController.add);
router.post("/create-users", AuthController.protect, AdminController.createUser);

export default router;
