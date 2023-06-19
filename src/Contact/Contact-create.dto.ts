import { IsNotEmpty, IsNumber } from "class-validator";
import { ContactDto } from "./Contact.dto";

export class CreateContactDto extends ContactDto {
  @IsNotEmpty()
  @IsNumber()
  created_by: number;
}
