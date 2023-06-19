import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

export class Parent extends BaseEntity {
  @PrimaryGeneratedColumn()
  value: number;

  @Column({ nullable: true })
  label: string;

  @Column({ nullable: true, type: "bigint" })
  user: number;
}
