import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_weights")
export class Weight extends Parent {}
