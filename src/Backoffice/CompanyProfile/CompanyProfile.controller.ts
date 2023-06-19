import { Request, Response } from "express";
import { CreateCompanyProfileDto } from "./CompanyProfile-create.dto";
import { CompanyProfileService } from "./CompanyProfile.service";
import { CompanyProfile } from "./CompanyProfile.entity";

export class CompanyProfileController {
  static add = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      console.log(user);

      let company_data: CreateCompanyProfileDto = req.body;
      company_data.created_by = Number(user);
      const company_result = await CompanyProfileService.add(company_data);
      if (!(company_result instanceof CompanyProfile)) {
        console.log(company_result);

        return res.status(400).json({ status: 400, error: company_result });
      }
      return res.status(201).json({ status: 201, data: company_result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
