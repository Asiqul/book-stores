import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

export const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosPrivate.interceptors.request.use(
    async (config) => {
        const currentTime = new Date();
        const expired = Cookies.get('_sess_exp');

        if (currentTime.getTime() > expired * 1000) {
            const response = await axios.get(import.meta.env.VITE_REQ_ACCESS_URL, {
                withCredentials: true,
            });
            const decoded = jwtDecode(response.data.accessToken);
            config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
            Cookies.set('_bk_sess', response.data.accessToken, {
                secure: true,
                sameSite: 'strict',
            });
            Cookies.set('_sess_exp', decoded.exp, {
                secure: true,
                sameSite: 'lax',
            });
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
