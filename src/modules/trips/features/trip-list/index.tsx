import { tripList } from "../../../../fakedata";
import TripCard from "../../components/TripCard";
import styles from "./styles/trip.module.css";

export default function TripList() {
  return (
    <section className={styles["trip-list-container"]}>
      <h2 className={styles["group-tour-text"]}>Group Tour</h2>
      <article className={styles["trip-list"]}>
        {tripList.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </article>
    </section>
  );
}
