import propTypes from 'prop-types';

function Subtitle(props) {
    const { title } = props;
    return (
        <>
            <div className="container mx-auto mt-8 lg:mt-11 flex justify-between">
                <h1 className="text-xl lg:text-2xl">{title}</h1>
                <a
                    href="#"
                    className="text-sm lg:text-base font-semibold text-tertiary hover:text-second transition duration-200 ease-in"
                >
                    Lihat Semua
                </a>
            </div>
        </>
    );
}

Subtitle.propTypes = {
    title: propTypes.string,
};
export default Subtitle;
