import { HeaderCategory } from './Header-Category';
import { Hamburger } from './Header-Hamburger';
import { Logo } from './Header-Logo';
import { SearchBar } from './Header-Search';
import { HeaderLogin, Users } from './Header-Users';

export const Header = () => {
  return (
    <div className="container mx-auto h-32 lg:h-20 lg:py-3 drop-shadow-md border-b-2">
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
};
