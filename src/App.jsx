import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieGrid from './components/MovieGrid/MovieGrid';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  return (
    <>
      <Header />
      <PageTitle title='Поиск' />
      <Search />
      <MovieGrid />
    </>
  );
}

export default App;
