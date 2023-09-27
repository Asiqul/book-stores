import { createContext, useState } from 'react';
import propTypes from 'prop-types';

const ProductContext = createContext('Description');

export const ProductProvider = ({ children }) => {
    const [isActive, setIsActive] = useState('Description');

    return <ProductContext.Provider value={{ isActive, setIsActive }}>{children}</ProductContext.Provider>;
};

ProductProvider.propTypes = {
    children: propTypes.node,
};

export default ProductContext;
