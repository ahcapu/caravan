import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class BiltyDetailDto {
  @IsNotEmpty()
  @IsNumber()
  bilty_id: number;

  @IsOptional()
  @IsString()
  supplier_first_name: string;

  @IsOptional()
  @IsString()
  supplier_last_name: string;

  @IsOptional()
  @IsNumber()
  vehicle_type: number;

  @IsNotEmpty()
  @IsString()
  vehicle_no: string;

  @IsNotEmpty()
  @IsString()
  driver_first_name: string;

  @IsNotEmpty()
  @IsString()
  driver_last_name: string;

  @IsNotEmpty()
  @IsString()
  driver_last_phone_code: string;

  @IsNotEmpty()
  @IsString()
  driver_last_phone: string;

  @IsOptional()
  @IsNumber()
  container_size: number;

  @IsOptional()
  @IsString()
  container_no: string;

  @IsOptional()
  @IsString()
  bilty_status: string;
}
