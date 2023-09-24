import React, { createContext, useState } from 'react';

const ProductContext = createContext('Description');

export const ProductProvider = ({ children }) => {
    const [isActive, setIsActive] = useState('Description');

    return <ProductContext.Provider value={{ isActive, setIsActive }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
