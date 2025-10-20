import style from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import { useState } from 'react';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <div className={style["search"]}>
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />

      <div className={style["search-container"]}>
        <Input
          placeholder="Введите название"
          name="search"
          value={searchInput}
          handleInput={handleInput}
          icon="./search.svg"
        />
        <Button onClick={handleButton} text="Искать" />
      </div>
    </div>
  );
}
