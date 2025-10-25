import { useState } from 'react';
import style from './Header.module.css';
import cn from 'classnames';

export default function Header({ login, userName, onLogout }) {
  const [activeTab, setActiveTab] = useState({
    search: true,
    favorite: false,
  });

  const handlerNav = (e) => {
    e.preventDefault();
    const tab = e.currentTarget.dataset.tab;
    setActiveTab({
      search: tab === 'search',
      favorite: tab === 'favorite',
    });
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <a href="#" className={style.logo}>
          <img src="./logo.svg" alt="logo" />
        </a>
      </div>
      <nav className={style.nav}>
        <a
          onClick={handlerNav}
          data-tab="search"
          href="#"
          className={cn({
            [style.active]: activeTab.search,
          })}
        >
          Поиск фильмов
        </a>
        <a
          onClick={handlerNav}
          data-tab="favorite"
          href="#"
          className={cn({
            [style.active]: activeTab.favorite,
          })}
        >
          Мои фильмы
          <span className={style.counter}>2</span>
        </a>
        {login ? (
          <>
            <a href="#">
              <img src="./user.svg" alt="user" />
              {userName}
            </a>
            <a onClick={onLogout} href="#">
              Выйти
            </a>
          </>
        ) : (
          <a href="#">
            Войти
            <img src="./login.svg" alt="login" />
          </a>
        )}
      </nav>
    </div>
  );
}
