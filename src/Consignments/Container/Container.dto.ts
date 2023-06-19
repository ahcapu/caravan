import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ContainerDto {
  @IsNotEmpty()
  @IsNumber()
  consigment_id: number;

  @IsNotEmpty()
  @IsString()
  container_no: string;

  @IsNotEmpty()
  @IsNumber()
  container_size_id: number;

  @IsNotEmpty()
  @IsString()
  load_name: string;

  @IsNotEmpty()
  @IsNumber()
  no_items: number;

  @IsNotEmpty()
  @IsNumber()
  item_type_id: number;

  @IsNotEmpty()
  @IsNumber()
  load_weight: number;

  @IsNotEmpty()
  @IsNumber()
  load_weight_id: number;

  @IsNotEmpty()
  @IsNumber()
  container_status: number;
}
