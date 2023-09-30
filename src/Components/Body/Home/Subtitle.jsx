import propTypes from 'prop-types';

function Subtitle(props) {
    const { title, expand } = props;
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-xl lg:text-2xl">{title}</h1>
                <a
                    href="#"
                    className={`${
                        expand ? 'block' : 'hidden'
                    } text-sm lg:text-base font-semibold text-tertiary hover:text-second transition duration-200 ease-in`}
                >
                    Lihat Semua
                </a>
            </div>
        </>
    );
}

Subtitle.propTypes = {
    title: propTypes.string,
    expand: propTypes.bool,
};
export default Subtitle;
