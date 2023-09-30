import Navbar from './Navbar';
import Footer from './Footer';
import propTypes from 'prop-types';
import Gmail from '../Components/Body/Home/Gmail';

function Layout({ children }) {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            {children}
            <Gmail />
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: propTypes.node,
};

export default Layout;
