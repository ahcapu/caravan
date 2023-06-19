import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export class RegularPrimaryKey extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: "bigint" })
  created_by: number;

  @Column({ nullable: true, type: "bigint" })
  updated_by: number;

  @Column({ nullable: true, type: "bigint" })
  deleted_by: number;

  @Column({ nullable: true, type: "boolean", default: false })
  is_active: Boolean;

  @Column({ nullable: true, type: "boolean", default: false })
  is_deleted: Boolean;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  deleted_at: Date;
}
