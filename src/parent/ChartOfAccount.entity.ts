import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "parent_chart_of_accounts" })
export class ChartOfAccount {
  @PrimaryColumn({ nullable: false, type: "integer" })
  acc_code: number;

  @Column({ nullable: true, type: "varchar", length: 10 })
  acc_type: string;

  @Column({ nullable: true, type: "varchar", length: 2 })
  acc_nature: string;

  @Column({ nullable: true, type: 'bigint' })
  user: number;
}
