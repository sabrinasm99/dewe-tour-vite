import styles from "./styles/priority.module.css";
type PriorityProps = {
  id: number;
  img: string;
  title: string;
  content: string;
};

export default function PriorityCard({
  priority,
}: {
  priority: PriorityProps;
}) {
  return (
    <section key={priority.id} className={styles["card-container"]}>
      <img src={priority.img} alt="menucard" className={styles["card-img"]} />
      <h4 className={styles["card-title"]}>{priority.title}</h4>
      <h4 className={styles["card-content"]}>{priority.content}</h4>
    </section>
  );
}
