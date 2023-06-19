import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_volumes")
export class Volume extends Parent {}
