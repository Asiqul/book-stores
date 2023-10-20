import AuthButton from '../Components/Body/Auth/Auth-Button';
import AuthFacebook from '../Components/Body/Auth/Auth-Facebook';
import AuthForms from '../Components/Body/Auth/Auth-Forms';
import AuthGoogle from '../Components/Body/Auth/Auth-Google';
import AuthTitle from '../Components/Body/Auth/Auth-Title';
import Header from '../Fragments/Header';
import useTitle from '../Utils/Hooks/useTitle';

function Register() {
    useTitle('Registrasi');
    return (
        <>
            <Header />
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3">
                <AuthTitle title="Daftar" />
                <AuthForms name="firstname" type="text" id="firstname" placeholder="Masukkan nama depan" />
                <AuthForms name="lastname" type="text" id="lastname" placeholder="Masukkan nama belakang" />
                <AuthForms name="email" type="email" id="email" placeholder="Masukkan email" />
                <AuthForms name="phone" type="tel" id="phone" placeholder="Masukkan No. Handphone" />
                <AuthForms name="password" type="password" id="password" placeholder="Masukkan kata sandi" />
                <AuthForms name="password" type="password" id="password" placeholder="Masukkan kembali kata sandi" />
                <AuthButton tag="Daftar" type="submit" />
                <AuthGoogle type="daftar" />
                <AuthFacebook type="daftar" />
            </div>
        </>
    );
}

export default Register;
