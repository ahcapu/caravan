import { plainToClass } from "class-transformer";
import { CreateBiltyBrokerFreightDto } from "./BiltyBrokerFreight-create";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { BiltyBrokerFreight } from "./BiltyBrokerFreight.entity";
import { AppDataSource } from "../../server";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { AccountTypeCoa } from "../../parent/AccountTypeCoa.entity";
import { Currency } from "../../parent/Currency.entity";

export class BiltyBrokerFreightService {
  private static biltyCostRepo = AppDataSource.getRepository(BiltyBrokerFreight);
  private static accountTypeRepo = AppDataSource.getRepository(AccountTypeCoa);
  private static currencyRepo = AppDataSource.getRepository(Currency);
  static add = async (data: CreateBiltyBrokerFreightDto) => {
    try {
      if (data.broker_reference) {
        let broker_reference = await this.accountTypeRepo.findOne({
          where: { ref_code: data.broker_reference },
        });
        if (!broker_reference) return { error: "cost reference not exists" };
      }

      if (data.broker_currency) {
        let broker_currency = await this.currencyRepo.findOne({
          where: { value: data.broker_currency },
        });
        if (!broker_currency) return { error: "currency not exists" };
      }
      const dto = plainToClass(CreateBiltyBrokerFreightDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let biltyCost = new BiltyBrokerFreight();
      Object.assign(biltyCost, dto);

      return await this.biltyCostRepo.save(biltyCost);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
