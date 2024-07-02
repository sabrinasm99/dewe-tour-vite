import { Navigate } from "react-router-dom";
import { useUserStore } from "../../../../store/useUserStore";
import { useGetUserPofile } from "../../../users/api/getUserProfile";

export default function AdminAuthenticatedRoute({
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

  if (!isLoadingGetUserProfile && !isErrorGetUserProfile) {
    if (user.is_admin) {
      return children;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  }

  if ((!isLoadingGetUserProfile && isErrorGetUserProfile) || !userId) {
    return <Navigate to="/" replace={true} />;
  }
}
