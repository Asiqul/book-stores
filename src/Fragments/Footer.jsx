import BigFooter from '../Components/Footer/Big-Footer';
import SmallFooter from '../Components/Footer/Small-Footer';
import Social from '../Components/Footer/Social';

function Footer() {
    return (
        <div className="mx-auto container">
            <BigFooter />
            <SmallFooter />
            <Social />
        </div>
    );
}

export default Footer;
