import './Search.css';
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import search from '../../assets/search.svg';

export default function Search() {
  return (
    <div className="search">
      <Paragraph text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>
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
