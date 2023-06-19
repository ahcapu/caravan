import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_statuses")
export class Status extends Parent {}
