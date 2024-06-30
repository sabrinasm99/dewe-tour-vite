type FieldType = "access-token" | "user-id";

export interface IAuthService {
  isAuthenticated(): boolean;
  getToken(fieldType: FieldType): string | null;
  setToken(fieldType: FieldType, token: string): void;
  removeToken(fieldType: FieldType): void;
  getUserId(fieldType: FieldType): string | null;
  setUserId(fieldType: FieldType, userId: string): void;
  removeUserId(fieldType: FieldType): void;
}

export class AuthService implements IAuthService {
  public accessToken: string | null;
  public userId: string | null;

  constructor() {
    this.accessToken = this.getToken("access-token");
    this.userId = this.getUserId("user-id");
  }

  public getToken(fieldType: FieldType): string | null {
    const token = localStorage.getItem(fieldType);
    return token ? token : null;
  }

  public setToken(fieldType: FieldType, token: string): void {
    localStorage.setItem(fieldType, token);
  }

  public getUserId(fieldType: FieldType): string | null {
    const userId = localStorage.getItem(fieldType);
    return userId ? userId : null;
  }

  public setUserId(fieldType: FieldType, userId: string): void {
    localStorage.setItem(fieldType, userId);
  }

  public removeToken(fieldType: FieldType): void {
    localStorage.removeItem(fieldType);
  }

  public removeUserId(fieldType: FieldType): void {
    localStorage.removeItem(fieldType);
  }

  isAuthenticated(): boolean {
    return this.getToken("access-token") !== null;
  }
}
