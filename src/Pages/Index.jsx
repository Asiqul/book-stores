import Banner from "../Components/Body/Home/Banner";
import Blog from "../Components/Body/Home/Blog";
import Brand from "../Components/Body/Home/Brand";
import Footer from "../Components/Body/Home/Footer";
import Gmail from "../Components/Body/Home/Gmail";
import Navbar from "../Fragments/Navbar";
import Recomendations from "../Fragments/Recomendations";

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
      <div>
        <Brand />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Gmail />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
