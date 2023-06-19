import {  Entity } from "typeorm";
import { Parent } from "./Parent";

@Entity("parent_item_types")
export class ItemType extends Parent {
  
}
