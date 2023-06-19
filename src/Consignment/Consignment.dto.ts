import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class ConsignmentDto {
  // order Info
  @IsOptional()
  @IsDateString()
  booking_date: Date;

  @IsOptional()
  @IsString()
  bl_number: string;

  @IsOptional()
  @IsString()
  lc_number: string;

  @IsOptional()
  @IsString()
  shipping_line: string;

  @IsOptional()
  @IsString()
  load_type: string;

  @IsOptional()
  @IsNumber()
  no_containers: number;

  @IsOptional()
  @IsNumber()
  container_size_id: number;

  @IsOptional()
  @IsNumber()
  no_items: number;

  @IsOptional()
  @IsNumber()
  item_type_id: number;

  @IsOptional()
  @IsNumber()
  total_weight: number;

  @IsOptional()
  @IsNumber()
  weight_id: number;

  @IsOptional()
  @IsString()
  mot: string;

  // customer Info
  
  // loading address
  @IsOptional()
  @IsNumber()
  loading_country: number;

  @IsOptional()
  @IsNumber()
  loading_city: number;

  @IsOptional()
  @IsString()
  loading_address: string;

  @IsOptional()
  @IsString()
  terminal_no: string;

  @IsOptional()
  @IsString()
  loading_contact_person: string;

  @IsOptional()
  @IsString()
  loading_contact_phone_code: string;

  @IsOptional()
  @IsString()
  loading_contact_phone: string;

  @IsOptional()
  @IsString()
  loading_contact_email: string;

  @IsOptional()
  @IsDateString()
  departure_date: Date;

  // un loading address
  @IsOptional()
  @IsNumber()
  un_loading_country: number;

  @IsOptional()
  @IsNumber()
  un_loading_city: number;

  @IsOptional()
  @IsString()
  un_loading_address: string;

  @IsOptional()
  @IsString()
  un_terminal_no: string;

  @IsOptional()
  @IsString()
  un_loading_contact_person: string;

  @IsOptional()
  @IsString()
  un_loading_contact_phone_code: string;

  @IsOptional()
  @IsString()
  un_loading_contact_phone: string;

  @IsOptional()
  @IsString()
  un_loading_contact_email: string;

  @IsOptional()
  @IsDateString()
  arrival_date: Date;
}
