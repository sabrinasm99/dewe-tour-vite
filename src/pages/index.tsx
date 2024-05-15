import HomeLayout from "../modules/shared/layout/HomeLayout";
import PriorityList from "../modules/trips/features/prioity-list";
import TripList from "../modules/trips/features/trip-list";

export default function HomePage() {
  return (
    <HomeLayout>
      <PriorityList />
      <TripList />
    </HomeLayout>
  );
}
