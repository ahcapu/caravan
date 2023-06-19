import { Column, Entity } from "typeorm";
import { ParentBaseManual } from "./ParentBaseManual";

@Entity("parent_time_zones")
export class TimeZone extends ParentBaseManual {
  @Column({ nullable: true, type: 'varchar' })
  tz_utc: string;

  @Column({ nullable: true, type: 'float' })
  tz_dec: number;

  @Column({ nullable: true, type: 'float' })
  tz_id_if_dst: number;
}
