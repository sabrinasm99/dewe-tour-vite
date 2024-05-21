import { useNavigate } from "react-router-dom";
import styles from "./styles/trip-card.module.css";

type TripProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  country: string;
  code: string;
};

export default function TripCard({ trip }: { trip: TripProps }) {
  const navigate = useNavigate();

  const clickDetail = (id: number) => {
    navigate(`/trip/${id}`);
  };
  return (
    <section
      key={trip.id}
      onClick={() => {
        clickDetail(trip.id);
      }}
      className={styles["card-container"]}
    >
      <img src={trip.img} alt={trip.img} className={styles["card-img"]} />
      <h4 className={styles["card-title"]}>{trip.title}</h4>
      <article className={styles["price-and-place-container"]}>
        <h4 className={styles["card-price"]}>
          IDR. {trip.price.toLocaleString()}
        </h4>
        <h4 className={styles["card-place"]}>{trip.country}</h4>
      </article>
      <p className={styles["card-quota"]}>{trip.code}</p>
    </section>
  );
}
