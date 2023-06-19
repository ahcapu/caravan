import { NextFunction, Request, Response } from "express";
import { AuthService } from "./Auth.service";

export class AuthController {
  static protect = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return res.status(401).json({
          status: 401,
          message: "You are not logged in! Please log in to get access.",
        });
      }

      let user = await AuthService.protect(token);

      if (!user)
        return res.status(401).json({
          status: 401,
          message: "The user belonging to this token does no longer exist.",
        });

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: "The user belonging to this token does no longer exist.",
      });
    }
  };
}
