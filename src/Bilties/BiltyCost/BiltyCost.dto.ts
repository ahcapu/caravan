import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { PaymentMode } from "../../Utils/Enum";

export class BiltyCostDto {
  @IsNotEmpty()
  @IsNumber()
  bilty_id: number;

  @IsNotEmpty()
  @IsString()
  cost_head: string;

  @IsOptional()
  @IsString()
  cost_description: string;

  @IsNotEmpty()
  @IsDateString()
  cost_date: Date;

  @IsNotEmpty()
  @IsEnum(PaymentMode)
  cost_mode: PaymentMode;

  @IsNotEmpty()
  @IsNumber()
  cost_reference: number; // Account type coa

  @IsNotEmpty()
  @IsNumber()
  cost_currency: number; // Currency

  @IsNotEmpty()
  @IsNumber()
  cost_amount: number;
}
