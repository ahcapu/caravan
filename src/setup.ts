import { Application } from "express";

import admin from "./Backoffice/Admin/admin.route";
import parent from './parent/parent.route';
import consignment from './Consignments/Consignment/consignment.route';
import bilty from './Bilties/Bilty/Bilty.route';

export const setup = (app: Application) => {
  app.use("/api/v1/admin", admin);
  app.use("/api/v1/parents", parent);
  app.use("/api/v1/consignments", consignment);
  app.use("/api/v1/bilties", bilty);
};
