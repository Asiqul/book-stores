import Navbar from './Navbar';
import propTypes from 'prop-types';

Layout.propTypes = {
    children: propTypes.node,
};

function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
