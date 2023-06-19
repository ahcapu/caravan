import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_distances")
export class Distance extends Parent {}
