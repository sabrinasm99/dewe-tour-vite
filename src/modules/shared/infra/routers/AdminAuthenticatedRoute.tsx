import { Navigate } from "react-router-dom";
import { useCheckIsAdmin } from "../../../users/api/checkIsAdmin";
import { useUserStore } from "../../../../store/useUserStore";

export default function AdminAuthenticatedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const {
    data: isAdmin,
    isLoading: isLoadingCheckIsAdmin,
    isError: isErrorCheckIsAdmin,
  } = useCheckIsAdmin();
  const userId = useUserStore((state: any) => state.userId);

  if (!isLoadingCheckIsAdmin && !isErrorCheckIsAdmin) {
    if (isAdmin) {
      return children;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  }

  if ((!isLoadingCheckIsAdmin && isErrorCheckIsAdmin) || !userId) {
    return <Navigate to="/" replace={true} />;
  }
}
