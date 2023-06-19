import { Request, Response } from "express";
import { BiltyDetailService } from "./BiltyDetail.service";
import { CreateBiltyDetailDto } from "./BiltyDetail-create.dto";
import { BiltyDetail } from "./BiltyDetail.entity";

export class BiltyDetailController {
  static add = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      let bilty_detail_data: CreateBiltyDetailDto = req.body;
      bilty_detail_data.created_by = Number(user);
      const bilty_detail_result = await BiltyDetailService.add(bilty_detail_data);
      if (!(bilty_detail_result instanceof BiltyDetail)) {
        return res.status(400).json({ status: 400, error: bilty_detail_result });
      }
      return res.status(201).json({ status: 201, data: "response" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
