import { Navigate } from "react-router-dom";
import { useUserStore } from "../../../../store/useUserStore";
import { useGetUserPofile } from "../../../users/api";
import Loading from "../../components/loading";

export default function CustomerAuthenticatedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const {
    data: user,
    isLoading: isLoadingGetUserProfile,
    isError: isErrorGetUserProfile,
  } = useGetUserPofile();
  const userId = useUserStore((state: any) => state.userId);

  if (isLoadingGetUserProfile) {
    return <Loading />;
  }

  if (!isLoadingGetUserProfile && !isErrorGetUserProfile) {
    if (user.is_admin) {
      return <Navigate to="/transaction-list" replace={true} />;
    } else {
      return children;
    }
  }

  if ((!isLoadingGetUserProfile && isErrorGetUserProfile) || !userId) {
    return <Navigate to="/" replace={true} />;
  }
}
