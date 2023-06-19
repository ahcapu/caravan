import { Router } from "express";
import { ParentController } from "./Parent.controller";
import { AuthController } from "../Auth/Auth.controller";

const router = Router();
router.use(AuthController.protect);
router.post("/weights", ParentController.addWeight);
router.post("/sizes", ParentController.addSize);
router.post("/item-types", ParentController.addItemType);
router.post("/volumes", ParentController.addVolume);
router.post("/time-zones", ParentController.addTimeZone);
router.post("/distances", ParentController.addDistance);
router.post("/countries", ParentController.addCountry);
router.post("/cities", ParentController.addCity);
router.post("/container-sizes", ParentController.addContainerSize);
router.post("/currencies", ParentController.addCurrency);
router.post("/statuses", ParentController.addStatus);
router.post("/chart-of-accounts", ParentController.addChartOfAccount);
router.post("/vehicle-types", ParentController.addVehicleType);
router.post("/account-type-coa", ParentController.addAccountTypeCoa);

export default router;