import Layout from '../Fragments/Layout';
import ImageCard from '../Components/Body/Product/Image-Card';
import BookDetail from '../Fragments/Book-Detail';
import { ProductProvider } from '../Utils/Context/product-context';
import CheckoutCard from '../Components/Body/Product/Checkout-Card';
import Recomendations from '../Fragments/Books/Recomendations';
import Others from '../Fragments/Books/Others';
import useTitle from '../Utils/Hooks/useTitle';
import CheckoutBar from '../Components/Body/Product/Checkout-Bar';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../Utils/Sevices/Axios';

function Product() {
    useTitle('Detail Buku');
    const [query] = useSearchParams();
    const id = query.get('id');
    const [book, setBook] = useState([]);

    const getBook = async () => {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getBook();
    }, []);

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
