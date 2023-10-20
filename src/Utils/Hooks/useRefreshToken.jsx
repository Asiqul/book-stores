import axios from '../Sevices/Axios';
import useAuth from './useAuth';
import jwtDecode from 'jwt-decode';

function useRefreshToken() {
    const { setAuth } = useAuth();

    async function getAccess() {
        const response = await axios.get('/auth/user/access');
        const accessToken = response.data.accessToken;
        const decoded = jwtDecode(response.data.accessToken);
        setAuth({ ...decoded, accessToken });
        return response.data.accessToken;
    }
    return getAccess;
}

export default useRefreshToken;
