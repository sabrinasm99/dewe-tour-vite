type TokenType = "access-token" | "refresh-token";

export interface IAuthService {
  isAuthenticated(): boolean;
  getToken(tokenType: TokenType): string | null;
  setToken(tokenType: TokenType, token: string): void;
  removeToken(tokenType: TokenType): void;
}

export class AuthService implements IAuthService {
  public accessToken: string | null;
  public refreshToken: string | null;

  constructor() {
    this.accessToken = this.getToken("access-token");
    this.refreshToken = this.getToken("refresh-token");
  }

  public getToken(tokenType: TokenType): string | null {
    const token = localStorage.getItem(tokenType);
    return token ? token : null;
  }

  public setToken(tokenType: TokenType, token: string): void {
    localStorage.setItem(tokenType, token);
  }

  public removeToken(tokenType: TokenType): void {
    localStorage.removeItem(tokenType);
  }

  isAuthenticated(): boolean {
    return this.getToken("access-token") !== null;
  }
}
