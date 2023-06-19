import { IsEmail, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";

export class AdminSigninDto {
  @ValidateIf((f) => (f.phone_code === null && f.phone === null))
  @IsNotEmpty()
  email: string;

  @ValidateIf((f) => (f.email === null))
  @IsNotEmpty()
  phone_code: string;

  @ValidateIf((f) => (f.email === null))
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;
}
