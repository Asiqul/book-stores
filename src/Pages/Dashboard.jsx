import AddressList from '../Components/Body/Profile/Address-List';
import NavButton from '../Components/Body/Profile/Nav-Button';
import OrderList from '../Components/Body/Profile/Order-List';
import StickyNav from '../Components/Body/Profile/Sticky-Nav';
import UserProfile from '../Components/Body/Profile/User-Profile';
import Layout from '../Fragments/Layout';
import { ProfileProvider } from '../Utils/Context/profile-context';
import useTitle from '../Utils/Hooks/useTitle';
import useAxiosPrivate from '../Utils/Hooks/useAxiosPrivate';
import { useEffect } from 'react';
import useAuth from '../Utils/Hooks/useAuth';

function Dashboard() {
    useTitle('Dashboard');
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();

    const getProfile = async () => {
        const response = await axiosPrivate.get('/api/user/profile', {
            headers: {
                Authorization: `Bearer ${auth?.accessToken}`,
            },
        });
        console.log(response);
    };
    useEffect(() => {
        getProfile();
    }, []);
    return (
        <>
            <Layout>
                <ProfileProvider>
                    <div className="container mx-auto md:flex md:flex-row-reverse justify-between gap-5 min-h-screen">
                        <div className="mt-40 md:mt-36 lg:mt-32 md:w-full">
                            <NavButton />
                            <UserProfile />
                            <AddressList />
                            <OrderList />
                        </div>
                        <StickyNav />
                    </div>
                </ProfileProvider>
            </Layout>{' '}
        </>
    );
}

export default Dashboard;
