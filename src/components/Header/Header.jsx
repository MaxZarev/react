import style from './Header.module.css'

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style["logo"]}>
        <a href="#" className={style.logo}>
          <img src='./logo.svg' alt="logo" />
        </a>
      </div>
      <nav className={style.nav}>
        <a href="#" className={style['active']}>Поиск фильмов</a>
        <a href="#">Мои фильмы 
            <span className={style.counter}>2</span>      
        </a>
        <a href="#">Войти
            <img src='./login.svg' alt="login" />
        </a>

      </nav>
    </div>
  );
}
