import ProfileContext from '../../../Utils/Context/profile-context';
import { useContext, useEffect, useState } from 'react';
import emptyOrder from '../../../assets/icons/empty-order.png';
import { axiosPrivate } from '../../../Utils/Sevices/Axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function OrderList() {
    const { isActive } = useContext(ProfileContext);
    const accessToken = Cookies.get('_bk_sess');
    const [history, setHistory] = useState([]);

    const getHistory = async () => {
        const response = await axiosPrivate.get('/api/user/history', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        setHistory(response.data.data);
    };

    useEffect(() => {
        getHistory();
    }, []);

    return (
        <div
            className={`${
                isActive === 'order-list' ? 'flex flex-col lg:flex-row' : 'hidden'
            } py-10  justify-center items-center gap-5`}
        >
            {history?.length === 0 ? (
                <>
                    <div className="">
                        <img src={emptyOrder} alt="empty-order" className="max-w-xs"></img>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2 bg-transparent">
                        <h2 className="text-2xl font-semibold text-center bg-transparent">
                            Kamu belum pernah berbelanja.
                        </h2>
                        <p className="text-center my-4 bg-transparent">
                            Kamu masih belum bisa berbelanja, ayo segera tambahkan alamatmu dan mulai belanja!
                        </p>
                    </div>
                </>
            ) : (
                <ul className="w-full px-3 py-6 -mt-8 flex flex-col gap-4 bg-transparent">
                    {history.map((item) => (
                        <div
                            key={item.book.id}
                            className="px-2 py-3 bg-border bg-opacity-10 rounded-lg text-sm md:text-base"
                        >
                            <li className="font-semibold text-md text-tertiary mb-2">
                                <Link to={`/product-detail/${item.book.id}`}>{item.book.title}</Link>
                            </li>

                            <li>{'Jumlah : ' + item.quantity}</li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default OrderList;
