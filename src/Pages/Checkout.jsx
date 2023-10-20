import { useState } from 'react';
import AuthTitle from '../Components/Body/Auth/Auth-Title';
import StoreCard from '../Fragments/Store-Card';
import StoreDetail from '../Components/Body/Stores/Store-Detail';
import StorePayment from '../Components/Body/Stores/Store-Payment';
import Header from '../Fragments/Header';
import PaymentSummary from '../Components/Body/Stores/Payment-Summary';
import useTitle from '../Utils/Hooks/useTitle';

function Checkout() {
    useTitle('Checkout');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="container mx-auto min-h-screen">
                <AuthTitle title="Checkout" />
                <div className="lg:flex gap-8 items-center justify-between py-5  min-h-1/2">
                    <div className="lg:w-8/12">
                        <StoreCard onClick={() => setIsOpen(!isOpen)} />
                        <StoreDetail isOpen={isOpen} />
                    </div>
                    <div className="hidden lg:block lg:w-2/5 lg:relative">
                        <StorePayment />
                        <PaymentSummary />
                    </div>
                    <div className="lg:hidden lg:w-2/5 lg:relative">
                        <StorePayment isOpen={isOpen} />
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
