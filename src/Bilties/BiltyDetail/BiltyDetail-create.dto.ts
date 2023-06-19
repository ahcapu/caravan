import { IsNotEmpty } from "class-validator";
import { BiltyDetailDto } from "./BiltyDetail.dto";

export class CreateBiltyDetailDto extends BiltyDetailDto {
  @IsNotEmpty()
  created_by: number;
}
