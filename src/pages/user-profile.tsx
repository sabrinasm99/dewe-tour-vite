import PaymentHistories from "../modules/payment/features/history";
import Layout from "../modules/shared/layout/Layout";
import UserProfile from "../modules/users/features/profile";

export default function UserProfilePage() {
  return (
    <Layout>
      <UserProfile />
      <PaymentHistories />
    </Layout>
  );
}
