import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_vehicle_types")
export class VehicleType extends Parent {}