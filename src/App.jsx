import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieGrid from './components/MovieGrid/MovieGrid';
import PageTitle from './components/PageTitle/PageTitle';
import LoginForm from './components/LoginForm/LoginForm';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <LoginForm />
      <PageTitle title="Поиск" />
      <Search />
      <MovieGrid />
    </UserContextProvider>
  );
}
export default App;
