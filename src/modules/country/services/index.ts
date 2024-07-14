import { authService } from "../../users/services";
import { CountryService } from "./countryService";

const countryService = new CountryService(authService);

export { countryService };
