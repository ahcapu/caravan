import { Request, Response } from "express";
import { AdminService } from "./Admin.service";
import { BackofficeAdmin } from "./Admin.entity";
import { AdminSigninDto } from "./Admin-signin.dto";
import { CreateUserDto } from "./User-create.dto";

export class AdminController {
  static adminSignup = async (req: Request, res: Response) => {
    try {
      let data = req.body;
      const result = await AdminService.signup(data);
      if (!(result instanceof BackofficeAdmin)) {
        return res.status(201).json({ status: 400, error: result });
      }
      const {
        password,
        password_reset_token,
        password_reset_expires,
        ...response
      } = result;
      return res.status(201).json({ status: 201, data: response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static adminSignin = async (req: Request, res: Response) => {
    try {
      let data: AdminSigninDto = req.body;
      const result = await AdminService.signin(data);
      if (!(result instanceof BackofficeAdmin)) {
        return res.status(400).json({ status: 400, error: result });
      }

      const {
        password,
        password_reset_token,
        password_reset_expires,
        ...response
      } = result;
      return res.status(201).json({ status: 201, data: response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static createUser = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      let data: CreateUserDto = req.body;
      data.created_by = user;
      const result = await AdminService.createUser(data);
      if (!(result instanceof BackofficeAdmin)) {
        return res.status(201).json({ status: 400, error: result });
      }
      const {
        password,
        password_reset_token,
        password_reset_expires,
        ...response
      } = result;
      return res.status(201).json({ status: 201, data: response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
