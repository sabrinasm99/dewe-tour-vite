import { BaseAPI } from "../../shared/infra/services/BaseAPI";
import { TransactionProps } from "../../shared/types";
import { IAuthService } from "../../users/services/authService";

export class TransactionService extends BaseAPI {
  constructor(authService: IAuthService) {
    super(authService);
  }

  async addTransaction(data: any) {
    try {
      const userId = this.authService.getUserId("user-id");
      if (!userId) {
        throw new Error("id doesn't exist");
      }

      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      data = { ...data, customer_id: userId };

      const result = await this.post("/transactions", data, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllTransactions() {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.get(`/transactions/`, null, {
        Authorization: token,
      });

      return result.data.data.map((transaction: TransactionProps) => {
        return {
          ...transaction,
          attachment: transaction.attachment
            ? `${this.baseUrl}/proof/${transaction.attachment}`
            : transaction.attachment,
        };
      });
    } catch (error) {
      throw error;
    }
  }

  async getTransactionById(id: number) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.get(`/transactions/${id}`, null, {
        Authorization: token,
      });

      const transaction = result.data.data;

      return {
        ...transaction,
        attachment: transaction.attachment
          ? `${this.baseUrl}/proof/${transaction.attachment}`
          : transaction.attachment,
      };
    } catch (error) {
      throw error;
    }
  }

  async getTransactionsByUserId() {
    try {
      const userId = this.authService.getUserId("user-id");
      if (!userId) {
        throw new Error("id doesn't exist");
      }

      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.get(`/transactions/customers/${userId}`, null, {
        Authorization: token,
      });

      return result.data.data.map((transaction: TransactionProps) => {
        return {
          ...transaction,
          attachment: transaction.attachment
            ? `${this.baseUrl}/proof/${transaction.attachment}`
            : transaction.attachment,
        };
      });
    } catch (error) {
      throw error;
    }
  }

  async getApprovedTransactionsByUserId() {
    try {
      const userId = this.authService.getUserId("user-id");
      if (!userId) {
        throw new Error("id doesn't exist");
      }

      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.get(`/transactions/customers/${userId}`, null, {
        Authorization: token,
      });

      return result.data.data
        .filter(
          (transaction: TransactionProps) => transaction.status === "approved"
        )
        .map((transaction: TransactionProps) => {
          return {
            ...transaction,
            attachment: transaction.attachment
              ? `${this.baseUrl}/proof/${transaction.attachment}`
              : transaction.attachment,
          };
        });
    } catch (error) {
      throw error;
    }
  }

  async payForTrip(id: number) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.put(`/transactions/${id}/pay`, null, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async uploadPaymentProof(id: number, data: FormData) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.post(`/transactions/${id}/upload`, data, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async approveTransaction(id: number) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = await this.put(`/transactions/${id}/approve`, null, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
