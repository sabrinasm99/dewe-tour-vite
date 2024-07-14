import { BaseAPI } from "../../shared/infra/services/BaseAPI";
import { TripProps } from "../../shared/types";
import { IAuthService } from "../../users/services/authService";

export class TripService extends BaseAPI {
  constructor(authService: IAuthService) {
    super(authService);
  }

  async getAllTrips() {
    try {
      const result = await this.get("/trips");

      return result.data.data.map((trip: TripProps) => {
        return {
          ...trip,
          cover_image: `${this.baseUrl}/trip/${trip.cover_image}`,
          detailed_images: trip.detailed_images.map(
            (image) => `${this.baseUrl}/trip/${image}`
          ),
        };
      });
    } catch (error) {
      throw error;
    }
  }

  async getTripByIdOnDetailTrip(id: string) {
    try {
      const result = await this.get(`/trips/${id}`);
      const trip: TripProps = result.data.data;

      const newDate = new Date(trip.date);
      const date = newDate.getDate();
      const month = newDate.toLocaleString("default", { month: "long" });
      const year = newDate.getFullYear();

      return {
        ...trip,
        date: `${date} ${month} ${year}`,
        cover_image: `${this.baseUrl}/trip/${trip.cover_image}`,
        detailed_images: trip.detailed_images.map(
          (image) => `${this.baseUrl}/trip/${image}`
        ),
      };
    } catch (error) {
      throw error;
    }
  }

  async getTripByIdOnEditTrip(id: string) {
    try {
      const result = await this.get(`/trips/${id}`);
      const trip: TripProps = result.data.data;

      return {
        ...trip,
        date: trip.date.split("T")[0],
        cover_image: `${this.baseUrl}/trip/${trip.cover_image}`,
        detailed_images: trip.detailed_images.map(
          (image) => `${this.baseUrl}/trip/${image}`
        ),
      };
    } catch (error) {
      throw error;
    }
  }

  async addTrip(data: any) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }

      const result = this.post("/trips", data, null, { Authorization: token });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async saveTrip(id: string, data: any) {
    try {
      const token = this.authService.getToken("access-token");
      if (!token) {
        throw new Error("You are not authenticated");
      }
      const result = this.put(`/trips/${id}`, data, null, {
        Authorization: token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
