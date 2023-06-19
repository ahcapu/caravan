import { IsNotEmpty } from "class-validator";
import { ConsignmentDto } from "./Consignment.dto";

export class CreateConsignmentDto extends ConsignmentDto {
  @IsNotEmpty()
  created_by: number;
}
