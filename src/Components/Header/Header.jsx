import { Hamburger } from './Header-Hamburger';
import { Logo } from './Header-Logo';
import { SearchBar } from './Header-Search';
import { Users } from './Header-Users';

export const Header = () => {
  return (
    <div className="container mx-auto drop-shadow-md inset-2 fixed">
      <div className="flex justify-between items-center pb-3">
        <Hamburger />
        <Logo />
        <Users />
      </div>
      <div className="container justify-center">
        <SearchBar />
      </div>
    </div>
  );
};
