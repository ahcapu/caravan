import { IsNotEmpty } from "class-validator";
import { BiltyCostDto } from "./BiltyCost.dto";

export class CreateBiltyCostDto extends BiltyCostDto {
  @IsNotEmpty()
  created_by: number;
}
