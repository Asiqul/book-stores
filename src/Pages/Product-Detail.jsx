import Layout from '../Fragments/Layout';
import ImageCard from '../Components/Body/Product/Image-Card';
import BookDetail from '../Fragments/Book-Detail';
import { ProductProvider } from '../Utils/Context/product-context';
import CheckoutCard from '../Components/Body/Product/Checkout-Card';
import Recomendations from '../Fragments/Books/Recomendations';
import Others from '../Fragments/Books/Others';
import useTitle from '../Utils/Hooks/useTitle';
import CheckoutBar from '../Components/Body/Product/Checkout-Bar';

function Product() {
    useTitle('Detail Buku');
    return (
        <>
            <Layout>
                <ProductProvider>
                    <div>
                        <div>
                            <div className="container mx-auto px-2 mt-36 flex flex-col md:flex-row md:justify-around gap-6 md:gap-4">
                                <ImageCard />
                                <BookDetail />
                                <CheckoutCard />
                            </div>
                            <CheckoutBar />
                        </div>
                        <Recomendations />
                        <Others />
                    </div>
                </ProductProvider>
            </Layout>
        </>
    );
}

export default Product;
