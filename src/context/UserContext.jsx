import { createContext } from 'react';

const UserContext = createContext({
  userState: {
    userName: '',
    isLogin: false,
  },
  login: () => {},
  logout: () => {},
});

export default UserContext;
