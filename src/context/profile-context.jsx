import React, { createContext, useState } from 'react';

const ProfileContext = createContext('profile');

export const ProfileProvider = ({ children }) => {
  const [isActive, setIsActive] = useState('profile');

  return <ProfileContext.Provider value={{ isActive, setIsActive }}>{children}</ProfileContext.Provider>;
};

export default ProfileContext;
