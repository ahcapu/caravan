import { plainToClass } from "class-transformer";
import { CaravanFactory } from "../Utils/CaravanFectory";
import { ErrorHandling } from "../Utils/ErrorHandling";
import { AppDataSource } from "../server";
import { CreateContactDto } from "./Contact-create.dto";
import { Contact } from "./Contact.entity";
import { Country } from "../parent/Country.entity";
import { City } from "../parent/City.entity";
import { Consignment } from "../Consignment/Consignment.entity";

export class ContactService {
  private static consigmentRepo = AppDataSource.getRepository(Consignment);
  private static contactRepo = AppDataSource.getRepository(Contact);
  private static countryRepo = AppDataSource.getRepository(Country);
  private static cityRepo = AppDataSource.getRepository(City);

  static add = async (data: CreateContactDto) => {
    try {
      let customerExists = await this.contactRepo.query(`SELECT * FROM contacts WHERE (customer_email = $1) OR (customer_phone_code = $2 AND customer_phone = $3)`, [data.customer_email, data.customer_phone_code, data.customer_phone]);
      if (customerExists.length) data.id = Number(customerExists[0]?.id) || Number(Date.now());
      if (data.consignment_id) {
        const consignment = await this.consigmentRepo.find({
          where: { id: data.consignment_id },
        });
        if (!consignment.length) {
          return { error: "consignment not exists" };
        }
        if (consignment.length > 1)
          return { error: "consignment already exists" };
      }

      if (data.customer_country_id) {
        const country = await this.countryRepo.findOne({
          where: { value: data.customer_country_id },
        });
        if (!country) {
          return { error: "country not exists" };
        }
      }

      if (data.customer_city_id) {
        const city = await this.cityRepo.findOne({
          where: { value: data.customer_city_id },
        });
        if (!city) {
          return { error: "city not exists" };
        }
      }
      const dto = plainToClass(CreateContactDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      if (data.id) {
        await this.contactRepo.update({id: data.id}, dto);
        return await this.contactRepo.findOne({ where: { id: data.id } });
      }
      let contact = new Contact();
      contact.id = Date.now();
      Object.assign(contact, dto);
      return await this.contactRepo.save(contact);

    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
