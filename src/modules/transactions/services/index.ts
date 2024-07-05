import { authService } from "../../users/services";
import { TransactionService } from "./transactionService";

const transactionService = new TransactionService(authService);

export { transactionService };
