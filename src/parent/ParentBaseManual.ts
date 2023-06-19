import {
  BaseEntity,
  Column,
  PrimaryColumn,
} from "typeorm";

export class ParentBaseManual extends BaseEntity {
  @PrimaryColumn({ type: "double precision" })
  value: number;

  @Column({ nullable: true, type: 'varchar' })
  label: string;

  @Column({ nullable: true, type: 'bigint' })
  user: number;
}
