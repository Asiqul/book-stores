import { createContext, useState } from 'react';
import propTypes from 'prop-types';

const ProfileContext = createContext('profile');

export const ProfileProvider = ({ children }) => {
    const [isActive, setIsActive] = useState('profile');

    return <ProfileContext.Provider value={{ isActive, setIsActive }}>{children}</ProfileContext.Provider>;
};

ProfileProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export default ProfileContext;
