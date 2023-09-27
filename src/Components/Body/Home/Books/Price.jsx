import propTypes from 'prop-types';

function Price({ price }) {
    const formatPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(price);

    return (
        <>
            <div className="mt-1">
                <h4 className="text-md font-semibold text-second text-left">{formatPrice}</h4>
            </div>
        </>
    );
}

Price.propTypes = {
    price: propTypes.number,
};
export default Price;
