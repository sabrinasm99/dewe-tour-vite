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

  async addCountry(data: any) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.post("/countries", data, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateCountry(id: string, data: any) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.put(`/countries/${id}`, data, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteCountry(id: string) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = this.delete(`/countries/${id}`, null, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
