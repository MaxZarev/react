import { useState } from 'react';
import UserContext from './UserContext';

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(() => {
    const userState = localStorage.getItem('userState');
    if (userState) {
      return JSON.parse(userState);
    } else {
      return {
        userName: '',
        isLogin: false,
      };
    }
  });

  const login = (userName) => {
    const userState = { userName, isLogin: true };
    localStorage.setItem('userState', JSON.stringify(userState));
    setUserState(userState);
  };
  const logout = () => {
    const userState = { userName: '', isLogin: false };
    localStorage.setItem('userState', JSON.stringify(userState));
    setUserState(userState);
  };

  return (
    <UserContext.Provider value={{ userState, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
