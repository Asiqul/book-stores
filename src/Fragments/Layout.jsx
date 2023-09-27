import Navbar from './Navbar';
import propTypes from 'prop-types';

function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: propTypes.node,
};

export default Layout;
