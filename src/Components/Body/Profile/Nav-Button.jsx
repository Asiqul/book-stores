import { useContext } from 'react';
import ProfileContext from '../../../context/profile-context';

function NavButton() {
  const { isActive, setIsActive } = useContext(ProfileContext);

  return (
    <div className="border-b-2 border-border border-opacity-30">
      <div className={`flex flex-row justify-center items-center relative`}>
        <button
          className={`btn ${
            isActive === 'profile' ? 'btn-accent' : 'btn-ghost'
          } w-1/3 text-sm normal-case font-semibold btn-md`}
          onClick={() => setIsActive('profile')}
        >
          Biodata
        </button>
        <button
          className={`btn ${
            isActive === 'address' ? 'btn-accent' : 'btn-ghost'
          } w-1/3 text-sm normal-case font-semibold`}
          onClick={() => setIsActive('address')}
        >
          Daftar Alamat
        </button>
        <button
          className={`btn ${
            isActive === 'order-list' ? 'btn-accent' : 'btn-ghost'
          } w-1/3 text-sm normal-case font-semibold md:hidden`}
          onClick={() => setIsActive('order-list')}
        >
          Pesanan Saya
        </button>
      </div>
    </div>
  );
}

export default NavButton;
