import { Column, Entity } from "typeorm";
import { RegularPrimaryKey } from "../../BaseDatabaseKey/RegularPrimaryKey";
import { PaymentMode } from "../../Utils/Enum";

@Entity({ name: "bilty_broker_freights" })
export class BiltyBrokerFreight extends RegularPrimaryKey {
  @Column({ nullable: true, type: "bigint" })
  bilty_id: number;
  @Column({ nullable: true, type: "varchar" })
  broker_head: string;

  @Column({ nullable: true, type: "varchar" })
  broker_description: string;

  @Column({ nullable: true, type: "date" })
  broker_date: Date;

  @Column({ nullable: true, type: "enum", enum: PaymentMode })
  broker_mode: PaymentMode;

  @Column({ nullable: true, type: "int" })
  broker_reference: number; // Account type coa

  @Column({ nullable: true, type: "int" })
  broker_currency: number; // Currency

  @Column({ nullable: true, type: "numeric" })
  broker_amount: number;
}
