import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles/trip-card.module.css";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { TripProps } from "../../shared/types";

export default function TripCard({ trip }: { trip: TripProps }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clickDetail = (id: string) => {
    navigate(`/trip/${id}`);
  };
  return (
    <section
      key={trip.id}
      onClick={() => {
        if (pathname !== "/admin-trip-list") {
          clickDetail(trip.id);
        }
      }}
      className={styles["card-container"]}
    >
      <img
        src={trip.cover_image}
        alt={trip.cover_image}
        className={styles["card-img"]}
      />
      <h4 className={styles["card-title"]}>{trip.title}</h4>
      <article className={styles["price-and-place-container"]}>
        <h4 className={styles["card-price"]}>
          IDR. {trip.price.toLocaleString()}
        </h4>
        <h4 className={styles["card-place"]}>{trip.country.name}</h4>
      </article>
      <article
        className={`${
          pathname === "/admin-trip-list" ? "flex" : "hidden"
        } mt-1`}
      >
        <section
          onClick={() => navigate(`/edit-trip/${trip.id}`)}
          className="flex items-center text-gray-600 hover:text-blue-500"
        >
          <MdEdit />
          <p className="ml-1 font-medium">Edit</p>
        </section>
        <section className="flex items-center ml-3 text-gray-600 hover:text-red-500">
          <IoMdTrash />
          <p className="ml-1 font-medium">Remove</p>
        </section>
      </article>
      <p className={styles["card-quota"]}>
        {trip.booked_slots}/{trip.quota}
      </p>
    </section>
  );
}
