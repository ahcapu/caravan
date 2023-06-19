import { plainToClass } from "class-transformer";
import { CreateBiltyDetailDto } from "./BiltyDetail-create.dto";
import { BiltyDetail } from "./BiltyDetail.entity";
import { AppDataSource } from "../../server";
import { VehicleType } from "../../parent/VehicleType.entity";
import { ContainerSize } from "../../parent/ContainerSize.entity";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { ErrorHandling } from "../../Utils/ErrorHandling";


export class BiltyDetailService {
  private static biltyDetailRepo = AppDataSource.getRepository(BiltyDetail);
  private static vehicleTypeRepo = AppDataSource.getRepository(VehicleType);
  private static containerSizeRepo = AppDataSource.getRepository(ContainerSize);

  static add = async (data: CreateBiltyDetailDto) => {
    try {
      
      if (data.container_size) {
        let container_size = await this.containerSizeRepo.findOne({ where: { value: data.container_size }});
        if (!container_size) return { error: 'container size id not exists' };
      }

      if (data.vehicle_type) {
        let vehicle_type = await this.vehicleTypeRepo.findOne({ where: { value: data.vehicle_type }});
        if (!vehicle_type) return { error: 'vehicleType id not exists' };
      }

      const dto = plainToClass(CreateBiltyDetailDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let biltyDetail = new BiltyDetail();
      biltyDetail.id = Date.now();
      Object.assign(biltyDetail, dto);

      return await this.biltyDetailRepo.save(biltyDetail);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
