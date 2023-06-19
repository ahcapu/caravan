import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ParentBaseManual } from "./ParentBaseManual";
import { TimeZone } from "./TimeZone.entity";

@Entity("parent_cities")
export class City extends ParentBaseManual {
  @Column({ type: "integer", nullable: true })
  country_id: number;

  @Column({ type: "double precision", nullable: true })
  city_tz_id: number;
}
