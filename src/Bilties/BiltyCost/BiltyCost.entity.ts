import { Column, Entity } from "typeorm";
import { RegularPrimaryKey } from "../../BaseDatabaseKey/RegularPrimaryKey";
import { PaymentMode } from "../../Utils/Enum";

@Entity({ name: "bilty_costs" })
export class BiltyCost extends RegularPrimaryKey {
  @Column({ nullable: true, type: "varchar" })
  cost_head: string;

  @Column({ nullable: true, type: "varchar" })
  cost_description: string;

  @Column({ nullable: true, type: "date" })
  cost_date: Date;

  @Column({ nullable: true, type: "enum", enum: PaymentMode })
  cost_mode: PaymentMode;

  @Column({ nullable: true, type: "int" })
  cost_reference: number; // Account type coa

  @Column({ nullable: true, type: "numeric" })
  cost_amount: number;
}
