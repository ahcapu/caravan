import { plainToClass } from "class-transformer";
import { CreateBiltyCostDto } from "./BiltyCost-create";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { BiltyCost } from "./BiltyCost.entity";
import { AppDataSource } from "../../server";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { AccountTypeCoa } from "../../parent/AccountTypeCoa.entity";
import { Currency } from "../../parent/Currency.entity";

export class BiltyCostService {
  private static biltyCostRepo = AppDataSource.getRepository(BiltyCost);
  private static accountTypeRepo = AppDataSource.getRepository(AccountTypeCoa);
  private static currencyRepo = AppDataSource.getRepository(Currency);
  static add = async (data: CreateBiltyCostDto) => {
    try {
      if (data.cost_reference) {
        let cost_reference = await this.accountTypeRepo.findOne({
          where: { ref_code: data.cost_reference },
        });
        if (!cost_reference) return { error: "cost reference not exists" };
      }

      if (data.cost_currency) {
        let cost_currency = await this.currencyRepo.findOne({
          where: { value: data.cost_currency },
        });
        if (!cost_currency) return { error: "currency not exists" };
      }
      const dto = plainToClass(CreateBiltyCostDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let biltyCost = new BiltyCost();
      Object.assign(biltyCost, dto);

      return await this.biltyCostRepo.save(biltyCost);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
