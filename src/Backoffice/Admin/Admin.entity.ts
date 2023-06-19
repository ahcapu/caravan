import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../../BaseDatabaseKey/ManualIntegerPrimaryKey";

@Entity({ name: "backoffice_admin_users" })
export class BackofficeAdmin extends ManualIntegerPrimaryKey {
  @Column({ nullable: true, type: "varchar", length: 100 })
  first_name: string;

  @Column({ nullable: true, type: "varchar", length: 100 })
  last_name: string;

  @Column({ nullable: true, type: "varchar", length: 10 })
  phone_code: string;

  @Column({ nullable: true, type: "varchar", length: 100 })
  phone: string;

  @Column({ nullable: true, type: "varchar", length: 150 })
  email: string;

  @Column({ nullable: true, type: "varchar", length: 200 })
  password: string;

  @Column({ nullable: true, type: "varchar", length: 255 })
  password_reset_token: string;

  @Column({ nullable: true, type: "double precision" })
  password_reset_expires: number;

  token?: string;
}
