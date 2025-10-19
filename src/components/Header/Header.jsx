import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#" className="logo">
          <img src='./logo.svg' alt="logo" />
        </a>
      </div>
      <nav className="nav">
        <a href="#" className='active'>Поиск фильмов</a>
        <a href="#">Мои фильмы 
            <span className="counter">2</span>      
        </a>
        <a href="#">Войти
            <img src='./login.svg' alt="login" />
        </a>

      </nav>
    </div>
  );
}
