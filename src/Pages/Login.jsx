import AuthButton from '../Components/Body/Auth/Auth-Button';
import AuthFacebook from '../Components/Body/Auth/Auth-Facebook';
import AuthForms from '../Components/Body/Auth/Auth-Forms';
import AuthGoogle from '../Components/Body/Auth/Auth-Google';
import AuthTitle from '../Components/Body/Auth/Auth-Title';
import Header from '../Fragments/Header';
import useTitle from '../Utils/Hooks/useTitle';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../Utils/Sevices/Axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

function Login() {
    useTitle('Masuk');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post(
                '/auth/user/login',
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const accessToken = response?.data.accessToken;
            const decoded = jwtDecode(accessToken);
            Cookies.set('_bk_sess', accessToken, { secure: true, sameSite: 'strict' });
            Cookies.set('_sess_exp', decoded.exp, { secure: true, sameSite: 'lax' });
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <>
            <Header />
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3 min-h-screen">
                <form onSubmit={handleLogin}>
                    <AuthTitle title="Masuk" />
                    {error && <p className="text-error text-center">{error}</p>}
                    <AuthForms
                        name="email"
                        type="email"
                        placeholder="Masukkan email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <AuthForms
                        name="password"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <AuthButton tag="Masuk" type="submit" disabled={isLoading} />
                    <AuthGoogle type="masuk" />
                    <AuthFacebook type="masuk" />
                </form>
            </div>
        </>
    );
}

export default Login;
