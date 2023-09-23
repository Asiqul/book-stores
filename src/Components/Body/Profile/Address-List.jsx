import ProfileContext from '../../../context/profile-context';
import { useContext } from 'react';
import emptyOrder from '../../../assets/icons/empty-order.png';

function AddressList() {
  const { isActive } = useContext(ProfileContext);
  return (
    <div
      className={`${
        isActive === 'address' ? 'flex flex-col lg:flex-row' : 'hidden'
      } py-10  justify-center items-center gap-5`}
    >
      <div className="">
        <img src={emptyOrder} alt="empty-order" className="max-w-xs"></img>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 bg-transparent">
        <h2 className="text-2xl font-semibold text-center bg-transparent">Kamu belum pernah berbelanja</h2>
        <p className="text-center my-4 bg-transparent">
          Kamu masih belum pernah berbelanja, ayo mulai berbelanja sekarang. Gramedia memiliki jutaan produk lainnya
          hanya untukmu. Yuk mulia belanja!
        </p>
      </div>
    </div>
  );
}

export default AddressList;