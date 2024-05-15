import { priorities } from "../../../../fakedata";
import PriorityCard from "./PriorityCard";

export default function PriorityList() {
  return (
    <div className="relative" style={{ top: "-45px" }}>
      {/* <div style={{ paddingRight: "115px", paddingLeft: "115px" }}> */}
      <div className="grid grid-cols-4 gap-24">
        {priorities.map((priority) => (
          <PriorityCard key={priority.id} priority={priority} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
