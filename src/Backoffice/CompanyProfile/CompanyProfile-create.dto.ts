import { IsNotEmpty } from "class-validator";
import { CompanyProfileDto } from "./CompanyProfile.dto";

export class CreateCompanyProfileDto extends CompanyProfileDto {
  @IsNotEmpty()
  created_by: number;
}
