import { createContext, useState } from 'react';
import propTypes from 'prop-types';

ProductProvider.propTypes = {
    children: propTypes.node,
};

const ProductContext = createContext('Description');

export const ProductProvider = ({ children }) => {
    const [isActive, setIsActive] = useState('Description');

    return <ProductContext.Provider value={{ isActive, setIsActive }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
