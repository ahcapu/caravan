import { Request, Response } from "express";
import { ConsignmentService } from "./Consignment.service";
import { CreateConsignmentDto } from "./Consignment-create.dto";
import { Consignment } from "./Consignment.entity";
import { CreateContactDto } from "../Contact/Contact-create.dto";
import { ContactService } from "../Contact/Contact.service";
import { Contact } from "../Contact/Contact.entity";
import { AppDataSource } from "../server";
import { CreateContainerDto } from "../Container/Container-create.dto";
import { ContainerService } from "../Container/Container.service";
import { Container } from "../Container/Container.entity";

export class ConsignmentController {
  private static consignmentRepo = AppDataSource.getRepository(Consignment);
  static add = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      let consignment_data: CreateConsignmentDto = req.body;
      consignment_data.created_by = Number(user);
      const consignment_result = await ConsignmentService.add(consignment_data);
      if (!(consignment_result instanceof Consignment)) {
        return res.status(400).json({ status: 400, error: consignment_result });
      }

      let contact_data: CreateContactDto = req.body.contact;
      contact_data.created_by = Number(user);
      contact_data.consignment_id = consignment_result.id;
      const contact_result = await ContactService.add(contact_data);
      if (!(contact_result instanceof Contact)) {
        await this.consignmentRepo.delete({ id: consignment_result.id });
        return res.status(400).json({ status: 400, error: contact_result });
      }

      for (let i = 0; i < req.body.containers.length; i++) {
        const container: CreateContainerDto = req.body.containers[i];
        container.created_by = Number(user);
        container.consigment_id = consignment_result.id;
        const container_result = await ContainerService.add(container);
        if (!(container_result instanceof Container)) {
          await this.consignmentRepo.delete({ id: consignment_result.id });
          return res.status(400).json({ status: 400, error: container_result });
        }
      }
      return res.status(201).json({ status: 201, data: "response" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
