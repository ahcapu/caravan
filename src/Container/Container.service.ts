import { plainToClass } from "class-transformer";
import { CaravanFactory } from "../Utils/CaravanFectory";
import { ErrorHandling } from "../Utils/ErrorHandling";
import { AppDataSource } from "../server";
import { CreateContainerDto } from "./Container-create.dto";
import { Container } from "./Container.entity";
import { ContainerSize } from "../parent/ContainerSize.entity";
import { ItemType } from "../parent/ItemType.entity";
import { Weight } from "../parent/Weight.entity";

export class ContainerService {
  private static containerSizeRepo = AppDataSource.getRepository(ContainerSize);
  private static containerRepo = AppDataSource.getRepository(Container);
  private static item_typeRepo = AppDataSource.getRepository(ItemType);
  private static weightRepo = AppDataSource.getRepository(Weight);

  static add = async (data: CreateContainerDto) => {
    try {
      if (data.container_size_id) {
        let container_size = await this.containerSizeRepo.findOne({
          where: { value: data.container_size_id },
        });
        if (!container_size) return { error: "container size id not exists" };
      }

      if (data.item_type_id) {
        let item_type = await this.item_typeRepo.findOne({
          where: { value: data.item_type_id },
        });
        if (!item_type) return { error: "item type size id not exists" };
      }

      if (data.load_weight_id) {
        let weight = await this.weightRepo.findOne({
          where: { value: data.load_weight_id },
        });
        if (!weight) return { error: "weight id not exists" };
      }
      const dto = plainToClass(CreateContainerDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let container = new Container();
      container.id = Date.now();
      Object.assign(container, dto);

      return await this.containerRepo.save(container);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
