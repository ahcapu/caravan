import { plainToClass } from "class-transformer";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { CreateCompanyProfileDto } from "./CompanyProfile-create.dto";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { AppDataSource } from "../../server";
import { CompanyProfile } from "./CompanyProfile.entity";

export class CompanyProfileService {
  private static companyProfileRepo = AppDataSource.getRepository(CompanyProfile);
  static add = async (data: CreateCompanyProfileDto) => {
    try {
      data.id = Date.now();
      let profile = await this.companyProfileRepo.query(`SELECT * FROM company_profiles`);
      if (profile.length) data.id = profile[0].id
      const dto = plainToClass(CreateCompanyProfileDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let company = new CompanyProfile();
      Object.assign(company, dto);

      return await this.companyProfileRepo.save(company);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
