import { BaseAPI } from "../../shared/infra/services/BaseAPI";
import { IAuthService } from "../../users/services/authService";

export class CountryService extends BaseAPI {
  constructor(authService: IAuthService) {
    super(authService);
  }

  async getAllCountries() {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }
      const result = await this.get("/countries", null, {
        Authorization: token,
      });
      return result.data.data;
    } catch (error) {
      throw error;
    }
  }
}
