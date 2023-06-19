import { Column, Entity } from "typeorm";
import { ManualIntegerPrimaryKey } from "../../BaseDatabaseKey/ManualIntegerPrimaryKey";

@Entity({ name: "company_profiles" })
export class CompanyProfile extends ManualIntegerPrimaryKey {
  @Column({ nullable: true, type: "varchar" })
  company_full_name: string;

  @Column({ nullable: true, type: "varchar" })
  company_short_name: string;

  @Column({ nullable: true, type: "varchar" })
  brand_tagline: string;

  @Column({ nullable: true, type: "date" })
  date_established: Date;

  @Column({ nullable: true, type: "varchar" })
  company_reg_no: string;

  @Column({ nullable: true, type: "varchar" })
  service_area_1: string;

  @Column({ nullable: true, type: "varchar" })
  service_area_2: string;

  @Column({ nullable: true, type: "integer" })
  company_country: number;

  @Column({ nullable: true, type: "bigint" })
  company_city: number;

  @Column({ nullable: true, type: "varchar" })
  company_address: string;

  @Column({ nullable: true, type: "varchar" })
  company_phone_code_1: string;

  @Column({ nullable: true, type: "varchar" })
  company_phone_1: string;

  @Column({ nullable: true, type: "varchar" })
  company_phone_code_2: string;

  @Column({ nullable: true, type: "varchar" })
  company_phone_2: string;

  @Column({ nullable: true, type: "varchar" })
  company_email_1: string;

  @Column({ nullable: true, type: "varchar" })
  company_email_2: string;

  @Column({ nullable: true, type: "varchar" })
  company_web_site: string;

  @Column({ nullable: true, type: "varchar" })
  company_logo_small: string;

  @Column({ nullable: true, type: "varchar" })
  company_logo_large: string;
}
