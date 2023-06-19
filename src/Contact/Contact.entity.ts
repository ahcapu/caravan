import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../BaseDatabaseKey/ManualIntegerPrimaryKey";
import { CustomerStatus } from "../Utils/Enum";

@Entity({ name: "contacts" })
export class Contact extends ManualIntegerPrimaryKey {
  @Column({ nullable: true, type: 'bigint' })
  consignment_id: number;

  @Column({ nullable: true, type: 'enum', enum: CustomerStatus })
  customer_status: CustomerStatus;

  @Column({ nullable: true, type: "varchar" })
  customer_name: string;

  @Column({ nullable: true, type: "int" })
  customer_country_id: number;

  @Column({ nullable: true, type: "double precision" })
  customer_city_id: number;

  @Column({ nullable: true, type: "varchar" })
  customer_address: string;

  @Column({ nullable: true, type: "varchar" })
  customer_phone_code: string;

  @Column({ nullable: true, type: "varchar" })
  customer_phone: string;

  @Column({ nullable: true, type: "varchar" })
  customer_email: string;

  @Column({ nullable: true, type: "varchar" })
  agent_name: string;

  @Column({ nullable: true, type: "varchar" })
  agent_phone_code: string;

  @Column({ nullable: true, type: "varchar" })
  agent_phone: string;

  @Column({ nullable: true, type: "varchar" })
  agent_email: string;
}
