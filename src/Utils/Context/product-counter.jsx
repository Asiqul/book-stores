import { createContext, useState } from 'react';
import propTypes from 'prop-types';

const CounterContext = createContext('Description');

export const CounterProvider = ({ children }) => {
    const [quantity, setQuantity] = useState('Description');

    return <CounterContext.Provider value={{ quantity, setQuantity }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
    children: propTypes.node,
};

export default CounterContext;
