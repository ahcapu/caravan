import { Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_container_sizes")
export class ContainerSize extends Parent {}