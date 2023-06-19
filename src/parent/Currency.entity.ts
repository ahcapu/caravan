import { Column, Entity } from "typeorm";
import { ParentBaseManual } from "./ParentBaseManual";

@Entity("parent_currencies")
export class Currency extends ParentBaseManual {
  @Column({ nullable: true })
  currency_code: string;

  @Column({ nullable: true })
  currency_symbol: string;
}
