import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_sizes")
export class Size extends Parent {}