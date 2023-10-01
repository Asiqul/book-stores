import Navbar from './Navbar';
import Footer from './Footer';
import propTypes from 'prop-types';
import Gmail from '../Components/Body/Home/Gmail';

function Layout({ children, search_query }) {
    return (
        <div className="min-h-screen relative">
            <Navbar value={search_query} />
            {children}
            <Gmail />
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: propTypes.node,
    search_query: propTypes.string,
};

export default Layout;
