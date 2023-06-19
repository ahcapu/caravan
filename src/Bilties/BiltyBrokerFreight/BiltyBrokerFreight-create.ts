import { IsNotEmpty } from "class-validator";
import { BiltyBrokerFreightDto } from "./BiltyBrokerFreight.dto";

export class CreateBiltyBrokerFreightDto extends BiltyBrokerFreightDto {
  @IsNotEmpty()
  created_by: number;
}
