import HeaderCategory from '../Components/Header/Header-Category';
import Hamburger from '../Components/Header/Header-Hamburger';
import Logo from '../Components/Header/Header-Logo';
import SearchBar from '../Components/Header/Header-Search';
import Users from '../Components/Header/Header-Users';
import HeaderLogin from '../Components/Header/Header-Login';

function Navbar() {
  return (
    <div className="container mx-auto h-32 lg:h-20 lg:py-3 drop-shadow-md border-b-2 border-border border-opacity-30">
      <div className="flex justify-between items-center">
        <Hamburger />
        <Logo />
        <HeaderCategory />
        <div className="hidden lg:block w-1/2">
          <SearchBar />
        </div>
        <Users />
        <HeaderLogin />
      </div>
      <div className="lg:container lg:hidden pt-3">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
