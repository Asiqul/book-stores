import { lazy } from 'react';

const Banner = lazy(() => import('../Components/Body/Home/Banner'));
const Recomendations = lazy(() => import('../Fragments/Books/Recomendations'));
const Populars = lazy(() => import('../Fragments/Books/Populars'));
const Favourites = lazy(() => import('../Fragments/Books/Favourites'));
const International = lazy(() => import('../Fragments/Books/International'));
import Brand from '../Components/Body/Home/Brand';
import Blog from '../Components/Body/Home/Blog';
import Layout from '../Fragments/Layout';

function Index() {
    return (
        <>
            <Layout>
                <Banner />
                <Recomendations />
                <Populars />
                <Favourites />
                <International />
                <Brand />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
