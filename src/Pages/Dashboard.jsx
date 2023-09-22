import AddressList from '../Components/Body/Profile/Address-List';
import NavButton from '../Components/Body/Profile/Nav-Button';
import OrderList from '../Components/Body/Profile/Order-List';
import StickyNav from '../Components/Body/Profile/Sticky-Nav';
import UserProfile from '../Components/Body/Profile/User-Profile';
import Layout from '../Fragments/Layout';
import { ProfileProvider } from '../context/profile-context';

function Dashboard() {
  return (
    <>
      <ProfileProvider>
        <Layout>
          <div className="container mx-auto  md:flex md:flex-row-reverse justify-between gap-4 min-h-screen">
            <div className="mt-40 md:mt-36 lg:mt-32 md:w-full">
              <NavButton />
              <UserProfile />
              <AddressList />
              <OrderList />
            </div>
            <StickyNav />
          </div>
        </Layout>
      </ProfileProvider>
    </>
  );
}

export default Dashboard;
