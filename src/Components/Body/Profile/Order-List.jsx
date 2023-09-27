import ProfileContext from '../../../context/profile-context';
import { useContext } from 'react';
import emptyOrder from '../../../assets/icons/empty-order.png';

function OrderList() {
    const { isActive } = useContext(ProfileContext);
    return (
        <div
            className={`${
                isActive === 'order-list' ? 'flex flex-col lg:flex-row' : 'hidden'
            } py-10  justify-center items-center gap-5`}
        >
            <div className="">
                <img src={emptyOrder} alt="empty-order" className="max-w-xs"></img>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 bg-transparent">
                <h2 className="text-2xl font-semibold text-center bg-transparent">Kamu belum menambahkan alamat.</h2>
                <p className="text-center my-4 bg-transparent">
                    Kamu masih belum bisa berbelanja, ayo segera tambahkan alamatmu dan mulai belanja!
                </p>
            </div>
        </div>
    );
}

export default OrderList;
