import Banner from '../Components/Body/Home/Banner';
import Navbar from '../Fragments/Navbar';
import Recomendations from '../Fragments/Recomendations';

function Index() {
    return (
        <>
            <Navbar />
            <div>
                <Banner />
            </div>
            <div>
                <Recomendations />
            </div>
        </>
    );
}

export default Index;
