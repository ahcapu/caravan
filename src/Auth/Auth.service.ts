import { BackofficeAdmin } from "../Backoffice/Admin/Admin.entity";
import { tokenVerification } from "../Utils/Auth";
import { ErrorHandling } from "../Utils/ErrorHandling";
import { AppDataSource } from "../server";

export class AuthService {
  private static adminRepo = AppDataSource.getRepository(BackofficeAdmin);
  static protect = async (token: string) => {
    try {
      const decoded: any = await tokenVerification(token);
      const currentUser = await AuthService.adminRepo.findOne({
        where: { id: decoded.id },
      });

      if (!currentUser)
        return {
          error: "The user belonging to this token does no longer exist.",
        };

      return currentUser;
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
