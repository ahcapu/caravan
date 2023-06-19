import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../../BaseDatabaseKey/ManualIntegerPrimaryKey";

@Entity({ name: "bilty_details" })
export class BiltyDetail extends ManualIntegerPrimaryKey {
  @Column({ nullable: true, type: "bigint" })
  bilty_id: number;

  @Column({ nullable: true, type: "varchar" })
  supplier_first_name: string;

  @Column({ nullable: true, type: "varchar" })
  supplier_last_name: string;

  @Column({ nullable: true, type: "integer" })
  vehicle_type: number;

  @Column({ nullable: true, type: "varchar" })
  vehicle_no: string;

  @Column({ nullable: true, type: "varchar" })
  driver_first_name: string;

  @Column({ nullable: true, type: "varchar" })
  driver_last_name: string;

  @Column({ nullable: true, type: "varchar" })
  driver_last_phone_code: string;

  @Column({ nullable: true, type: "varchar" })
  driver_last_phone: string;

  @Column({ nullable: true, type: "integer" })
  container_size: number;

  @Column({ nullable: true, type: "varchar" })
  container_no: string;

  @Column({ nullable: true, type: "varchar" })
  bilty_status: string;
}
