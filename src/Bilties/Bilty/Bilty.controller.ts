import { Request, Response } from "express";
import { BiltyService } from "./Bilty.service";
import { CreateBiltyDto } from "./Bilty-create.dto";
import { Bilty } from "./Bilty.entity";
import { CreateContactDto } from "../../Contact/Contact-create.dto";
import { ContactService } from "../../Contact/Contact.service";
import { Contact } from "../../Contact/Contact.entity";
import { AppDataSource } from "../../server";
import { CreateBiltyDetailDto } from "../BiltyDetail/BiltyDetail-create.dto";
import { BiltyDetailService } from "../BiltyDetail/BiltyDetail.service";
import { BiltyDetail } from "../BiltyDetail/BiltyDetail.entity";
import { CreateBiltyCostDto } from "../BiltyCost/BiltyCost-create";
import { BiltyCostService } from "../BiltyCost/BiltyCost.service";
import { BiltyCost } from "../BiltyCost/BiltyCost.entity";
import { CreateBiltyBrokerFreightDto } from "../BiltyBrokerFreight/BiltyBrokerFreight-create";
import { BiltyBrokerFreightService } from "../BiltyBrokerFreight/BiltyBrokerFreight.service";
import { BiltyBrokerFreight } from "../BiltyBrokerFreight/BiltyBrokerFreight.entity";

export class BiltyController {
  private static biltyRepo = AppDataSource.getRepository(Bilty);
  static add = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      let bilty_data: CreateBiltyDto = req.body;
      bilty_data.created_by = Number(user);
      const bilty_result = await BiltyService.add(bilty_data);
      if (!(bilty_result instanceof Bilty)) {
        return res.status(400).json({ status: 400, error: bilty_result });
      }

      let contact_data: CreateContactDto = req.body.contact;
      contact_data.created_by = Number(user);
      contact_data.consignment_id = bilty_result.consignment_id;
      const contact_result = await ContactService.add(contact_data);
      if (!(contact_result instanceof Contact)) {
        console.log(contact_result);

        await this.biltyRepo.delete({ id: bilty_result.id });
        return res.status(400).json({ status: 400, error: contact_result });
      }

      for (let i = 0; i < req.body.bilty_details.length; i++) {
        const bilty_detail: CreateBiltyDetailDto = req.body.bilty_details[i];
        bilty_detail.created_by = Number(user);
        bilty_detail.bilty_id = bilty_result.id;

        const bilty_detail_result = await BiltyDetailService.add(bilty_detail);
        if (!(bilty_detail_result instanceof BiltyDetail)) {
          await this.biltyRepo.delete({ id: bilty_result.id });
          return res
            .status(400)
            .json({ status: 400, error: bilty_detail_result });
        }
      }

      for (let i = 0; i < req.body.bilty_costs.length; i++) {
        const bilty_cost: CreateBiltyCostDto = req.body.bilty_costs[i];
        bilty_cost.created_by = Number(user);
        bilty_cost.bilty_id = bilty_result.id;

        const bilty_cost_result = await BiltyCostService.add(bilty_cost);
        if (!(bilty_cost_result instanceof BiltyCost)) {
          await this.biltyRepo.delete({ id: bilty_result.id });
          return res
            .status(400)
            .json({ status: 400, error: bilty_cost_result });
        }
      }

      for (let i = 0; i < req.body.bilty_brokers.length; i++) {
        const bilty_broker: CreateBiltyBrokerFreightDto = req.body.bilty_brokers[i];
        bilty_broker.created_by = Number(user);
        bilty_broker.bilty_id = bilty_result.id;

        const bilty_broker_result = await BiltyBrokerFreightService.add(bilty_broker);
        if (!(bilty_broker_result instanceof BiltyBrokerFreight)) {
          await this.biltyRepo.delete({ id: bilty_result.id });
          return res
            .status(400)
            .json({ status: 400, error: bilty_broker_result });
        }
      }
      return res.status(201).json({ status: 201, data: "response" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
