import AddressList from '../Components/Body/Profile/Address-List';
import NavButton from '../Components/Body/Profile/Nav-Button';
import OrderList from '../Components/Body/Profile/Order-List';
import StickyNav from '../Components/Body/Profile/Sticky-Nav';
import UserProfile from '../Components/Body/Profile/User-Profile';
import Layout from '../Fragments/Layout';
import { ProfileProvider } from '../Utils/Context/profile-context';
import useTitle from '../Utils/Hooks/useTitle';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../Utils/Sevices/Axios';
import Cookies from 'js-cookie';

function Dashboard() {
    useTitle('Dashboard');
    const accessToken = Cookies.get('_bk_sess');
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState({});
    const [address, setAddress] = useState([]);

    const getProfile = async () => {
        const response = await axiosPrivate.get('/api/user/profile', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        setProfile(response.data.data);
        setAddress(response.data.data.address);
        setIsLoading(false);
    };
    useEffect(() => {
        setIsLoading(true);
        getProfile();
    }, []);
    return (
        <>
            <Layout>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <ProfileProvider>
                        <div className="container mx-auto md:flex md:flex-row-reverse justify-between gap-5 min-h-screen">
                            <div className="mt-40 md:mt-36 lg:mt-32 md:w-full">
                                <NavButton />
                                <UserProfile profile={profile} />
                                <AddressList address={address} />
                                <OrderList />
                            </div>
                            <StickyNav />
                        </div>
                    </ProfileProvider>
                )}
            </Layout>
        </>
    );
}

export default Dashboard;
