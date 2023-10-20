import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

function ProtectRoute() {
    const { auth } = useAuth();
    const location = useLocation();

    return auth?.accessToken ? <Navigate to={location.state?.from} state={{ from: '/' }} replace /> : <Outlet />;
}

export default ProtectRoute;
