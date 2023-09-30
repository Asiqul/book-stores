import Description from '../Components/Body/Product/Description';
import Detail from '../Components/Body/Product/Detail';
import Navigation from '../Components/Body/Product/Navigation';
import Title from '../Components/Body/Product/Title';
import { useContext } from 'react';
import ProductContext from '../Utils/Context/product-context';

function BookDetail() {
    const { isActive } = useContext(ProductContext);
    return (
        <>
            <div className="card md:w-2/3 lg:[46%]">
                <div className="card-body bg-white py-10 rounded-xl">
                    <Title />
                    <div className="w-full bg-transparent">
                        <Navigation />
                    </div>
                    <div className={`bg-transparent ${isActive === 'Detail' && 'hidden'}`}>
                        <Description />
                    </div>
                    <div className={`bg-transparent ${isActive === 'Description' && 'hidden'}`}>
                        <Detail />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookDetail;
