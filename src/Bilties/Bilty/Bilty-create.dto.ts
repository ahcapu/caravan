import { IsNotEmpty } from "class-validator";
import { BiltyDto } from "./Bilty.dto";

export class CreateBiltyDto extends BiltyDto {
  @IsNotEmpty()
  created_by: number;
}
