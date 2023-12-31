import HeaderCategory from '../Components/Header/Header-Category';
import Hamburger from '../Components/Header/Drawer';
import Logo from '../Components/Header/Header-Logo';
import SearchBar from '../Components/Header/Header-Search';
import Users from '../Components/Header/Header-Users';
import HeaderLogin from '../Components/Header/Header-Login';
import propTypes from 'prop-types';

function Navbar({ value }) {
    return (
        <>
            <nav className=" drop-shadow-md border-b-2 border-border bg-white border-opacity-30 flex fixed top-0 w-full justify-center items-cente z-50">
                <div className="container mx-auto h-32 lg:h-20 lg:py-3">
                    <div className="flex justify-between items-center">
                        <Hamburger />
                        <Logo />
                        <HeaderCategory />
                        <div className="hidden lg:block w-1/2">
                            <SearchBar value={value} />
                        </div>
                        <Users />
                        <HeaderLogin />
                    </div>
                    <div className="lg:container lg:hidden pt-3">
                        <SearchBar value={value} />
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    value: propTypes.string,
};
export default Navbar;
