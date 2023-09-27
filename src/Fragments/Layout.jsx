import Navbar from './Navbar';
import Footer from '../Components/Body/Home/Footer';
import propTypes from 'prop-types';

function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: propTypes.node,
};

export default Layout;
