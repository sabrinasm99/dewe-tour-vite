import { authService } from "../../users/services";
import { TripService } from "./tripService";

const tripService = new TripService(authService);

export { tripService };
