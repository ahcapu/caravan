import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { PaymentMode } from "../../Utils/Enum";

export class BiltyBrokerFreightDto {
  @IsNotEmpty()
  @IsNumber()
  bilty_id: number;

  @IsNotEmpty()
  @IsString()
  broker_head: string;

  @IsOptional()
  @IsString()
  broker_description: string;

  @IsNotEmpty()
  @IsDateString()
  broker_date: Date;

  @IsNotEmpty()
  @IsEnum(PaymentMode)
  broker_mode: PaymentMode;

  @IsNotEmpty()
  @IsNumber()
  broker_reference: number; // Account type coa

  @IsNotEmpty()
  @IsNumber()
  broker_currency: number; // Currency

  @IsNotEmpty()
  @IsNumber()
  broker_amount: number;
}
