import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieGrid from './components/MovieGrid/MovieGrid';
import PageTitle from './components/PageTitle/PageTitle';
import LoginForm from './components/LoginForm/LoginForm';
import { useEffect, useState } from 'react';

function App() {
  const [login, setLogin] = useState(() => {
    const savedLogin = localStorage.getItem('login');
    return savedLogin ? JSON.parse(savedLogin) : false;
  });

  const [userName, setUserName] = useState(() => {
    const savedUserName = localStorage.getItem('userName');
    return savedUserName ? savedUserName : '';
  });

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  const handleLogin = (name) => {
    setUserName(name);
    setLogin(true);
  };

  const handleLogout = () => {
    setUserName('');
    setLogin(false);
  };

  return (
    <>
      <Header login={login} userName={userName} onLogout={handleLogout} />
      <LoginForm login={login} onLogin={handleLogin} />
      <PageTitle title="Поиск" />
      <Search />
      <MovieGrid />
    </>
  );
}

export default App;
