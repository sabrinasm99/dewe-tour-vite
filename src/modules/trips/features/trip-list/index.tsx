import { useSearchTripStore } from "../../../../store/useSearchTripStore";
import { TripProps } from "../../../shared/types";
import { useGetAllTrips } from "../../api";
import TripCard from "../../components/TripCard";
import styles from "./styles/trip.module.css";

export default function TripList() {
  const search = useSearchTripStore((state: any) => state.search);
  const { data: trips } = useGetAllTrips();

  const filteredTrips: TripProps[] =
    trips &&
    trips.length &&
    trips.filter(
      (trip: TripProps) =>
        trip.title.toLowerCase().includes(search.toLowerCase()) ||
        trip.country.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className={styles["trip-list-container"]}>
      <h2 className={styles["group-tour-text"]}>Group Tour</h2>
      <article className={styles["trip-list"]}>
        {filteredTrips && filteredTrips.length ? (
          filteredTrips.map((trip: TripProps) => (
            <TripCard key={trip.id} trip={trip} />
          ))
        ) : (
          <></>
        )}
      </article>
    </section>
  );
}
