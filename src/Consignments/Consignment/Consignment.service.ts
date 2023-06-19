import { plainToClass } from "class-transformer";
import { CreateConsignmentDto } from "./Consignment-create.dto";
import { Consignment } from "./Consignment.entity";
import { AppDataSource } from "../../server";
import { Country } from "../../parent/Country.entity";
import { City } from "../../parent/City.entity";
import { ItemType } from "../../parent/ItemType.entity";
import { Weight } from "../../parent/Weight.entity";
import { ContainerSize } from "../../parent/ContainerSize.entity";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { ErrorHandling } from "../../Utils/ErrorHandling";



export class ConsignmentService {
  private static consignmentRepo = AppDataSource.getRepository(Consignment);
  private static countryRepo = AppDataSource.getRepository(Country);
  private static cityRepo = AppDataSource.getRepository(City);
  private static itemTypeRepo = AppDataSource.getRepository(ItemType);
  private static weightRepo = AppDataSource.getRepository(Weight);
  //   private static sizeRepo = AppDataSource.getRepository(Size);
  private static containerRepo = AppDataSource.getRepository(ContainerSize);

  static add = async (data: CreateConsignmentDto) => {
    try {
      if (data.loading_country) {
        const country = await this.countryRepo.findOne({
          where: { value: data.loading_country },
        });
        if (!country) {
          return { error: "loading country not exists" };
        }
      }

      if (data.loading_city) {
        const city = await this.cityRepo.findOne({
          where: { value: data.loading_city },
        });
        if (!city) {
          return { error: "loading city not exists" };
        }
      }

      if (data.un_loading_country) {
        const country = await this.countryRepo.findOne({
          where: { value: data.un_loading_country },
        });
        if (!country) {
          return { error: "un loading country not exists" };
        }
      }

      if (data.un_loading_city) {
        const city = await this.cityRepo.findOne({
          where: { value: data.un_loading_city },
        });
        if (!city) {
          return { error: "un loading city not exists" };
        }
      }

      if (data.item_type_id) {
        const itemType = await this.itemTypeRepo.findOne({
          where: { value: data.item_type_id },
        });
        if (!itemType) {
          return { error: "item type not exists" };
        }
      }

      if (data.weight_id) {
        const weight = await this.weightRepo.findOne({
          where: { value: data.weight_id },
        });
        if (!weight) {
          return { error: "weight not exists" };
        }
      }

      if (data.container_size_id) {
        const weight = await this.containerRepo.findOne({
          where: { value: data.container_size_id },
        });
        if (!weight) {
          return { error: "container size not exists" };
        }
      }
      const dto = plainToClass(CreateConsignmentDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let consignment = new Consignment();
      consignment.id = Date.now();
      Object.assign(consignment, dto);

      return await this.consignmentRepo.save(consignment);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
