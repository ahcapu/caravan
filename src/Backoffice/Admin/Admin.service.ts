import { plainToClass } from "class-transformer";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { AppDataSource } from "../../server";
import { AdminSignupDto } from "./Admin-signup.dto";
import { BackofficeAdmin } from "./Admin.entity";
import { CaravanFactory } from "../../Utils/CaravanFectory";
import { compare, hash } from "bcryptjs";
import { AdminSigninDto } from "./Admin-signin.dto";
import { carvanAdminJwt } from "../../Utils/Auth";
import { CreateUserDto } from "./User-create.dto";

export class AdminService {
  private static adminRepo = AppDataSource.getRepository(BackofficeAdmin);

  static signup = async (data: AdminSignupDto) => {
    try {
      if (data.password !== data.password_confirm)
        return { message: "Both passwords are not matching" };

      const dto = plainToClass(AdminSignupDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let user_name = await this.adminRepo.findOne({
        where: [
          { email: dto.email },
          { phone_code: dto.phone_code, phone: dto.phone },
        ],
      });

      if (user_name) return { error: "user already exists" };

      dto.password = await hash(dto.password, 10);

      let user = new BackofficeAdmin();
      user.id = Date.now();
      user.first_name = dto.first_name;
      user.last_name = dto.last_name;
      user.email = dto.email;
      user.phone_code = dto.phone_code;
      user.phone = dto.phone;
      user.password = dto.password;

      return await this.adminRepo.save(user);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };

  static signin = async (data: AdminSigninDto) => {
    try {
      const dto = plainToClass(AdminSigninDto, data);
      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let user = await this.adminRepo.findOne({
        where: [
          { is_active: true, email: data.email },
          { is_active: true, phone_code: data.phone_code, phone: data.phone },
        ],
      });
      if (!user) return { error: `Incorrect email or password` };
      if (!user || !(await compare(data.password, user.password))) {
        return { error: "Incorrect email or password" };
      }

      user.token = carvanAdminJwt(user.id);
      return user;
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };

  static createUser = async (data: CreateUserDto) => {
    try {
      if (data.password !== data.password_confirm)
        return { message: "Both passwords are not matching" };

      const dto = plainToClass(CreateUserDto, data);

      const error = await CaravanFactory.validator(dto);
      if (error) return error;

      let user_name = await this.adminRepo.findOne({
        where: [
          { email: dto.email },
          { phone_code: dto.phone_code, phone: dto.phone },
        ],
      });

      if (user_name) return { error: "user already exists" };

      dto.password = await hash(dto.password, 10);

      let user = new BackofficeAdmin();
      user.id = Date.now();
      user.first_name = dto.first_name;
      user.last_name = dto.last_name;
      user.email = dto.email;
      user.phone_code = dto.phone_code;
      user.phone = dto.phone;
      user.password = dto.password;

      return await this.adminRepo.save(user);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
