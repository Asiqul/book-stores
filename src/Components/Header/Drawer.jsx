import { Link } from 'react-router-dom';
import { useState } from 'react';
import dropdown from '../../assets/icons/dropdown-arrow.svg';
import Logo from './Header-Logo';
import CategoryItems from './Category-Items';

function Hamburger() {
    const [catOpen, setCatOpen] = useState(false);
    return (
        <div className="lg:hidden">
            <div className="drawer z-50">
                <input id="drawer-side" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="drawer-side" className="btn btn-ghost btn-circle drawer-button">
                        <div className="space-y-1.5 lg:hidden bg-transparent">
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-side" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-[70%] min-h-full bg-white">
                        <div className="flex justify-center w-full h-10 items-center border-b border-border">
                            <Logo />
                        </div>
                        <ul className="py-5 font-heading md:text-lg space-y-2">
                            <li
                                className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer"
                                onClick={() => setCatOpen(!catOpen)}
                            >
                                Kategori
                                <img
                                    src={dropdown}
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className={`p-0 ${-catOpen ? '' : '-rotate-90'}`}
                                />
                            </li>
                            <ul className={`${catOpen ? 'block' : 'hidden'} py-2 space-y-4 pl-5`}>
                                <CategoryItems />
                            </ul>
                            <Link
                                to="/dashboard"
                                className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer"
                            >
                                Akun Saya
                                <img
                                    src={dropdown}
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </Link>
                            <li className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer">
                                Bantuan
                                <img
                                    src={dropdown}
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </li>
                            <li className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer">
                                Keluar
                                <img
                                    src={dropdown}
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
