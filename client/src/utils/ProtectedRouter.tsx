import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRoute {
  isAllowed: boolean;
  redirect: string;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ isAllowed, redirect }) => {
  if (isAllowed) {
    return <Outlet />;
  } else return <Navigate to={`${redirect}`} />;
};

export default ProtectedRoute;
