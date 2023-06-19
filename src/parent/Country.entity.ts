import { Column, Entity } from "typeorm";
import { ParentBaseManual } from "./ParentBaseManual";

@Entity("parent_countries")
export class Country extends ParentBaseManual {
  @Column({ nullable: true })
  currency_id: number;

  @Column({ nullable: true })
  capital_tz_id: number;

  @Column({ nullable: true, type: "varchar" })
  iso2: string;

  @Column({ nullable: true, type: "varchar" })
  iso3: string;
}
