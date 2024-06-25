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
      return result;
    } catch (error) {
      throw error;
    }
  }

  async login(data: any) {
    try {
      const result = await this.post("/login", data);
      this.authService.setToken("access-token", result.data.data.token);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      this.authService.removeToken("access-token");
    } catch (error) {
      throw error;
    }
  }
}
