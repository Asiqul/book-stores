import ProfileContext from '../../../Utils/Context/profile-context';
import { useContext } from 'react';

function StickyNav() {
    const { isActive, setIsActive } = useContext(ProfileContext);
    return (
        <div className="card w-1/2 max-w-xs max-h-72 shadow-custom inset-3 sticky lg:top-32 md:top-36 hidden md:block">
            <div className="card-body rounded-xl">
                <ul className="my-2">
                    <li className="p-3 text-lg">
                        <button
                            href="/my-order"
                            className={`${isActive === 'order-list' ? 'text-tertiary btn-ghost' : 'btn-ghost'} btn`}
                            onClick={() => setIsActive('order-list')}
                        >
                            Pesanan Saya
                        </button>
                    </li>
                    <li className="p-3 text-lg">
                        <button
                            href="/my-account"
                            className={`${
                                isActive === 'profile' || isActive === 'address'
                                    ? 'text-tertiary btn-ghost'
                                    : 'btn-ghost'
                            } btn`}
                            onClick={() => setIsActive('profile')}
                        >
                            Akun Saya
                        </button>
                    </li>
                    <li className="p-3 text-lg mt-6 bg-transparent">
                        <button href="/my-account" className="btn btn-ghost hover:btn-error">
                            Keluar
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StickyNav;
