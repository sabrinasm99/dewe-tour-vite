import { BaseAPI } from "../../shared/infra/services/BaseAPI";
import { IAuthService } from "./authService";

export class UserService extends BaseAPI {
  constructor(authService: IAuthService) {
    super(authService);
  }

  async register(data: any) {
    try {
      const result = await this.post("/register", data);
      this.authService.setToken("access-token", result.data.data.token);
      this.authService.setUserId("user-id", result.data.data.id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async login(data: any) {
    try {
      const result = await this.post("/login", data);
      this.authService.setToken("access-token", result.data.data.token);
      this.authService.setUserId("user-id", result.data.data.id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      this.authService.removeToken("access-token");
      this.authService.removeUserId("user-id");
    } catch (error) {
      throw error;
    }
  }

  async getUserProfile() {
    try {
      const userId = this.authService.getUserId("user-id");
      if (!userId) {
        throw new Error("id doesn't exist");
      }

      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.get(`/customers/${userId}`, null, {
        Authorization: token,
      });

      const image = result.data.data.image;

      return {
        ...result.data.data,
        image: image
          ? `${this.baseUrl}/avatar/${result.data.data.image}`
          : image,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateUser(data: any) {
    try {
      const userId = this.authService.getUserId("user-id");
      if (!userId) {
        throw new Error("id doesn't exist");
      }
      const token = this.authService.getToken("access-token");
      const result = await this.put(`/customers/${userId}`, data, null, {
        Authorization: token,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
