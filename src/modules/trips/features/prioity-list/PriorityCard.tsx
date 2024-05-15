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
    <div
      key={priority.id}
      className="rounded-md bg-white py-12 px-8 text-center"
      style={{ height: "290px" }}
    >
      <img src={priority.img} alt="menucard" className="mx-auto" />
      <h4 className="font-bold text-black mx-auto mt-4">{priority.title}</h4>
      <h4 className="font-light text-gray-600 mx-auto text-sm mt-2">
        {priority.content}
      </h4>
    </div>
  );
}
