import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles/trip-card.module.css";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { TripProps } from "../../shared/types";
import React, { useState } from "react";

export default function TripCard({
  trip,
  setSelectedTrip,
  setShowDeleteConfirmation,
}: {
  trip: TripProps;
  setSelectedTrip?: React.Dispatch<TripProps>;
  setShowDeleteConfirmation?: React.Dispatch<boolean>;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showQuotaTooltip, setShowQuotaTooltip] = useState(false);

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
      <article className="relative">
        <img
          src={trip.cover_image}
          alt={trip.cover_image}
          className={styles["card-img"]}
        />
        <div
          className={`${
            trip.booked_slots === trip.quota ? "flex" : "hidden"
          } z-10 absolute h-full w-full rounded-md bg-backdropGray top-0 left-0 justify-start items-end`}
        >
          <article className="bg-backdrop px-1 sm:px-2 sm:py-1 rounded-md ml-1 mb-1">
            <p className="text-xs md:text-sm text-white font-bold">Sold Out</p>
          </article>
        </div>
      </article>
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
        <section
          onClick={() => {
            if (setSelectedTrip && setShowDeleteConfirmation) {
              setSelectedTrip({ ...trip });
              setShowDeleteConfirmation(true);
            }
          }}
          className="flex items-center ml-3 text-gray-600 hover:text-red-500"
        >
          <IoMdTrash />
          <p className="ml-1 font-medium">Delete</p>
        </section>
      </article>
      <p
        className={styles["card-quota"]}
        onMouseOver={() => setShowQuotaTooltip(true)}
        onMouseOut={() => setShowQuotaTooltip(false)}
      >
        {trip.booked_slots}/{trip.quota}
      </p>
      <div
        className={`${
          showQuotaTooltip ? "flex" : "hidden"
        } absolute top-6 right-11 z-10`}
      >
        <p className="bg-gray-500 text-gray-300 text-xs px-1 rounded-l-sm">
          Quota
        </p>
        <div
          className="w-0 h-full border-l-gray-500"
          style={{
            borderTop: "10px solid transparent",
            borderBottom: "10px solid transparent",
            borderLeftWidth: "10px",
          }}
        ></div>
      </div>
    </section>
  );
}
