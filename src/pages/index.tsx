import HomeLayout from "../modules/shared/layout/HomeLayout";
import PriorityList from "../modules/vacations/features/prioity-list";
import TripList from "../modules/vacations/features/trip-list";

export default function HomePage() {
  return (
    <HomeLayout>
      <PriorityList />
      <TripList />
    </HomeLayout>
  );
}
