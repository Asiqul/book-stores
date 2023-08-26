import Logo from '../Components/Header/Header-Logo';

function Header() {
  return (
    <div className="container mx-auto flex justify-center items-center py-2.5 lg:h-20 lg:py-3 drop-shadow-md border-b-2 border-border border-opacity-30">
      <Logo />
    </div>
  );
}

export default Header;
