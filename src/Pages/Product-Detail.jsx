import Layout from '../Fragments/Layout';
import ImageCard from '../Components/Body/Product/Image-Card';
import BookDetail from '../Fragments/Book-Detail';
import { ProductProvider } from '../Utils/Context/product-context';
import CheckoutCard from '../Components/Body/Product/Checkout-Card';
import Recomendations from '../Fragments/Books/Recomendations';
import Others from '../Fragments/Books/Others';
import useTitle from '../Utils/Hooks/useTitle';

function ProductDetail() {
    useTitle('Detail Buku');
    return (
        <>
            <div className="mb-44 lg:mb-0">
                <Layout>
                    <ProductProvider>
                        <div>
                            <div className="container mx-auto flex-row gap-10 lg:gap-2 hidden md:flex">
                                <div className="w-1/3 mt-40 lg:mt-36">
                                    <ImageCard />
                                </div>
                                <div className="w-2/3 mt-40 lg:-ml-12">
                                    <BookDetail />
                                </div>
                                <div className="w-1/3 mt-40 hidden lg:block">
                                    <CheckoutCard />
                                </div>
                            </div>
                            <div className="container mt-40 mx-auto md:hidden">
                                <ImageCard />
                            </div>
                            <div className="container mx-auto py-4 md:hidden">
                                <BookDetail />
                            </div>
                            <div className="lg:hidden">
                                <CheckoutCard />
                            </div>
                        </div>
                        <Recomendations background={'bg-cards_wrapper rounded-xl'} />
                        <Others />
                    </ProductProvider>
                </Layout>
            </div>
        </>
    );
}

export default ProductDetail;
