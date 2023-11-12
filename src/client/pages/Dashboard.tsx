import ProfileNavButton from '@/components/elements/body/buttons/ProfileNavButton';
import OrderList from '@/components/elements/body/cards/OrderList';
import ProfileAddress from '@/components/elements/body/cards/ProfileAddress';
import ProfileStickyNav from '@/components/fragments/ProfileStickyNav';
import UserProfileCard from '@/components/fragments/UserProfileCard';
import BaseLayout from '@/components/layouts/BaseLayout';
import usePrivate from '@/utils/hooks/usePrivate';
import useTitle from '@/utils/hooks/useTitle';
import { ProfileProvider } from '@/utils/context/ProfileContext';
import { useEffect, useState } from 'react';
import { UserAddressType, UserProfileType } from '@/types/data.type';

const Dashboard = () => {
    useTitle('Dashboard');
    const [profile, setProfile] = useState<UserProfileType | null>(null);
    const [address, setAddress] = useState<UserAddressType | null>(null);

    const { data, isLoading } = usePrivate<{ message: string; data: UserProfileType }>('/api/user/profile');

    useEffect(() => {
        if (data?.data) {
            setAddress(data.data.address);
            setProfile(data.data);
        }
    }, [data]);

    return (
        <>
            <BaseLayout>
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-spinner loading-lg text-second"></span>
                    </div>
                ) : (
                    <ProfileProvider>
                        <div className="container mx-auto md:flex md:flex-row-reverse justify-between gap-5 min-h-screen">
                            <div className="md:w-full">
                                <ProfileNavButton />
                                <UserProfileCard profile={profile} />
                                <ProfileAddress address={address || []} />
                                <OrderList history={[]} />
                            </div>
                            <ProfileStickyNav />
                        </div>
                    </ProfileProvider>
                )}
            </BaseLayout>
        </>
    );
};

export default Dashboard;
