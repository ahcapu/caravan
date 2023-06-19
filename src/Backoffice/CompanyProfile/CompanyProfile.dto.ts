import {
  IsDateString,
  IsEmail,
  IsFQDN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CompanyProfileDto {
  @IsOptional()
  id: number;
  @IsNotEmpty()
  @IsString()
  company_full_name: string;

  @IsOptional()
  @IsString()
  company_short_name: string;

  @IsOptional()
  @IsString()
  brand_tagline: string;

  @IsOptional()
  @IsDateString()
  date_established: Date;

  @IsOptional()
  @IsString()
  company_reg_no: string;

  @IsOptional()
  @IsString()
  service_area_1: string;

  @IsOptional()
  @IsString()
  service_area_2: string;

  @IsOptional()
  @IsNumber()
  company_country: number;

  @IsOptional()
  @IsNumber()
  company_city: number;

  @IsOptional()
  @IsString()
  company_address: string;

  @IsOptional()
  @IsString()
  company_phone_code_1: string;

  @IsOptional()
  @IsString()
  company_phone_1: string;

  @IsOptional()
  @IsString()
  company_phone_code_2: string;

  @IsOptional()
  @IsString()
  company_phone_2: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  company_email_1: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  company_email_2: string;

  @IsOptional()
  @IsFQDN()
  company_web_site: string;

  @IsOptional()
  @IsString()
  company_logo_small: string;

  @IsOptional()
  @IsString()
  company_logo_large: string;
}
