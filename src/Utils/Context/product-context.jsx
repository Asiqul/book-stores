import { createContext, useState } from 'react';
import propTypes from 'prop-types';

const ProductContext = createContext({
    isActive: 'Description',
    setIsActive: () => {},
    quantity: 1,
    setQuantity: () => {},
});

export const ProductProvider = ({ children }) => {
    const [isActive, setIsActive] = useState('Description');
    const [quantity, setQuantity] = useState(1);

    return (
        <ProductContext.Provider value={{ isActive, setIsActive, quantity, setQuantity }}>
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: propTypes.node,
};

export default ProductContext;
