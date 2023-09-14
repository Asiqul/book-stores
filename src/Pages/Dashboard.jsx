import Navbar from "../Fragments/Navbar";
import emptyOrder from "../assets/icons/empty-order.png"

function Dashboard() {
    return (
        <>
            <div>
                <Navbar />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left flex">
                            <img src={emptyOrder} alt="empty-order" className="max-w-sm"/>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-custom">
                            <div className="card-body rounded-xl">
                                <ul className="my-2">
                                    <li className="p-3 text-lg">
                                        <a href="/my-order">Pesanan Saya</a>
                                    </li>
                                    <li className="p-3 text-lg">
                                        <a href="/my-account">Akun Saya</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
