import './Search.css';
import Button from '../Button/Button'
import search from '../../assets/search.svg';

export default function Search() {
  return (
    <div className="search">
      <h1>Поиск</h1>
      <p>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </p>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img className="search-icon" src={search} alt="Search" />
          <input
            className="search-input"
            placeholder="Введите название"
            type="text"
            name="search"
          />
        </div>
        <Button text='Искать' />
      </div>
    </div>
  );
}
