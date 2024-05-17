import { priorities } from "../../../../fakedata";
import PriorityCard from "./PriorityCard";
import styles from "./styles/priority.module.css";

export default function PriorityList() {
  return (
    <section className={styles["priority-list-container"]}>
      <article className={styles["priority-list"]}>
        {priorities.map((priority) => (
          <PriorityCard key={priority.id} priority={priority} />
        ))}
      </article>
    </section>
  );
}
