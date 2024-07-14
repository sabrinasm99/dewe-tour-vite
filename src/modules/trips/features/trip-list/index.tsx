import { TripProps } from "../../../shared/types";
import { useGetAllTrips } from "../../api";
import TripCard from "../../components/TripCard";
import styles from "./styles/trip.module.css";

export default function TripList() {
  const { data: trips } = useGetAllTrips();

  return (
    <section className={styles["trip-list-container"]}>
      <h2 className={styles["group-tour-text"]}>Group Tour</h2>
      <article className={styles["trip-list"]}>
        {trips && trips.length ? (
          trips.map((trip: TripProps) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <></>
        )}
      </article>
    </section>
  );
}
