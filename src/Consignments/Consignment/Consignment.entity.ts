import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../../BaseDatabaseKey/ManualIntegerPrimaryKey";

@Entity({ name: "consignments" })
export class Consignment extends ManualIntegerPrimaryKey {
  // order Info
  @Column({ nullable: true, type: "date" })
  booking_date: Date;

  @Column({ nullable: true, type: "varchar" })
  bl_number: string;

  @Column({ nullable: true, type: "varchar" })
  lc_number: string;

  @Column({ nullable: true, type: "varchar" })
  shipping_line: string;

  @Column({ nullable: true, type: "varchar" })
  load_type: string;

  @Column({ nullable: true, type: "int" })
  no_containers: number;

  @Column({ nullable: true, type: "int" })
  container_size_id: number;

  @Column({ nullable: true, type: "int" })
  no_items: number;

  @Column({ nullable: true, type: "int" })
  item_type_id: number;

  @Column({ nullable: true, type: "float" })
  total_weight: number;

  @Column({ nullable: true, type: "int" })
  weight_id: number;

  @Column({ nullable: true, type: "varchar", default: "road" })
  mot: string;

  // customer Info

  // loading address
  @Column({ nullable: true, type: "int" })
  loading_country: number;

  @Column({ nullable: true, type: "double precision" })
  loading_city: number;

  @Column({ nullable: true, type: "varchar" })
  loading_address: string;

  @Column({ nullable: true, type: "varchar" })
  terminal_no: string;

  @Column({ nullable: true, type: "varchar" })
  loading_contact_person: string;

  @Column({ nullable: true, type: "varchar" })
  loading_contact_phone_code: string;

  @Column({ nullable: true, type: "varchar" })
  loading_contact_phone: string;

  @Column({ nullable: true, type: "varchar" })
  loading_contact_email: string;

  @Column({ nullable: true, type: "date" })
  departure_date: Date;

  // un loading address
  @Column({ nullable: true, type: "int" })
  un_loading_country: number;

  @Column({ nullable: true, type: "double precision" })
  un_loading_city: number;

  @Column({ nullable: true, type: "varchar" })
  un_loading_address: string;

  @Column({ nullable: true, type: "varchar" })
  un_terminal_no: string;

  @Column({ nullable: true, type: "varchar" })
  un_loading_contact_person: string;

  @Column({ nullable: true, type: "varchar" })
  un_loading_contact_phone_code: string;

  @Column({ nullable: true, type: "varchar" })
  un_loading_contact_phone: string;

  @Column({ nullable: true, type: "varchar" })
  un_loading_contact_email: string;

  @Column({ nullable: true, type: "date" })
  arrival_date: Date;
}
