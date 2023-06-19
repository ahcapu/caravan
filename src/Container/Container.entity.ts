import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../BaseDatabaseKey/ManualIntegerPrimaryKey";
import { Status } from "../parent/Status.entity";

@Entity({ name: "containers" })
export class Container extends ManualIntegerPrimaryKey {
  @Column({ nullable: true, type: "bigint" })
  consignment_id: number;

  @Column({ nullable: true, type: "varchar" })
  container_no: string;

  @Column({ nullable: true, type: "integer" })
  container_size_id: number;

  @Column({ nullable: true, type: "varchar" })
  load_name: string;

  @Column({ nullable: true, type: "integer" })
  no_items: number;

  @Column({ nullable: true, type: "integer" })
  item_type_id: number;

  @Column({ nullable: true, type: "float" })
  load_weight: number;

  @Column({ nullable: true, type: "integer" })
  load_weight_id: number;

  @Column({ nullable: true, type: 'integer' })
  container_status: Status;
}
