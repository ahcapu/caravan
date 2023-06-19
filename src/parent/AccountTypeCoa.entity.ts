import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'account_type_coa' })
export class AccountTypeCoa {
  @PrimaryColumn({ nullable: false, type: "integer" })
  ref_code: number;

  @Column({ nullable: true, type: "varchar" })
  acc_type: string;

  @Column({ nullable: true, type: "varchar" })
  acc_name: string;

  @Column({ nullable: true, type: "bigint" })
  user: number;
}
