import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { CustomerStatus } from "../Utils/Enum";

export class ContactDto {
  @IsOptional()
  @IsNumber()
  id?: number;
  
  @IsNotEmpty()
  @IsNumber()
  consignment_id: number;

  @IsNotEmpty()
  @IsEnum(CustomerStatus)
  customer_status: CustomerStatus; // enum

  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @IsNotEmpty()
  @IsNumber()
  customer_country_id: number;

  @IsNotEmpty()
  @IsNumber()
  customer_city_id: number;

  @IsNotEmpty()
  @IsString()
  customer_address: string;

  @IsNotEmpty()
  @IsString()
  customer_phone_code: string;

  @IsNotEmpty()
  @IsString()
  customer_phone: string;

  @IsNotEmpty()
  @IsEmail()
  customer_email: string;

  @IsOptional()
  @IsString()
  agent_name: string;

  @IsOptional()
  @IsString()
  agent_phone_code: string;

  @IsOptional()
  @IsString()
  agent_phone: string;

  @IsOptional()
  @IsEmail()
  agent_email: string;
}
