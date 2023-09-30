import AuthButton from '../Components/Body/Auth/Auth-Button';
import AuthFacebook from '../Components/Body/Auth/Auth-Facebook';
import AuthForms from '../Components/Body/Auth/Auth-Forms';
import AuthGoogle from '../Components/Body/Auth/Auth-Google';
import AuthTitle from '../Components/Body/Auth/Auth-Title';
import Header from '../Fragments/Header';
import useTitle from '../Utils/Hooks/useTitle';

function Login() {
    useTitle('Masuk');
    return (
        <>
            <Header />
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3 min-h-screen">
                <AuthTitle title="Masuk" />
                <AuthForms name="email" type="email" placeholder="Masukkan email" />
                <AuthForms name="password" type="password" placeholder="Masukkan kata sandi" />
                <AuthButton tag="Masuk" type="submit" />
                <AuthGoogle type="masuk" />
                <AuthFacebook type="masuk" />
            </div>
        </>
    );
}

export default Login;
