import Logo from '../Components/Header/Header-Logo';

function Header() {
    return (
        <div className="flex fixed bg-white top-0 w-full justify-center items-center py-2.5 lg:h-20 lg:py-3 drop-shadow-md border-b-2 border-border border-opacity-30 z-50">
            <Logo />
        </div>
    );
}

export default Header;
