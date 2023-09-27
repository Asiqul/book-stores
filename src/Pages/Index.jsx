import Banner from '../Components/Body/Home/Banner';
import Recomendations from '../Fragments/Books/Recomendations';
import Populars from '../Fragments/Books/Populars';
import Favourites from '../Fragments/Books/Favourites';
import International from '../Fragments/Books/International';
import Brand from '../Components/Body/Home/Brand';
import Blog from '../Components/Body/Home/Blog';
import Gmail from '../Components/Body/Home/Gmail';
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
                <Gmail />
            </Layout>
        </>
    );
}

export default Index;
