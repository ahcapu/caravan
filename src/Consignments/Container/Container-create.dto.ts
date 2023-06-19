import { IsNotEmpty, IsNumber } from "class-validator";
import { ContainerDto } from "./Container.dto";

export class CreateContainerDto extends ContainerDto {
  @IsNotEmpty()
  @IsNumber()
  created_by: number;
}
