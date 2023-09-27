import Banner from '../Components/Body/Home/Banner';
import Navbar from '../Fragments/Navbar';
import Recomendations from '../Fragments/Books/Recomendations';
import Populars from '../Fragments/Books/Populars';
import Favourites from '../Fragments/Books/Favourites';
import International from '../Fragments/Books/International';

function Index() {
    return (
        <>
            <Navbar />
            <Banner />
            <Recomendations />
            <Populars />
            <Favourites />
            <International />
        </>
    );
}

export default Index;
