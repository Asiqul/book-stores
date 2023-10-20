import { axiosPrivate } from '../Sevices/Axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

function useAxiosPrivate() {
    const { auth } = useAuth();
    const getAccess = useRefreshToken();

    axiosPrivate.interceptors.request.use(
        async (config) => {
            const currentTime = new Date();
            if (currentTime.getTime() > auth?.exp * 1000) {
                console.log(currentTime.getTime() > auth?.exp * 1000);
                const newAccessToken = await getAccess();
                config.headers['Authorization'] = `Bearer ${newAccessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return axiosPrivate;
}

export default useAxiosPrivate;
