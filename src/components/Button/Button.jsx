import style from './Button.module.css';

export default function Search( { onClick, text }) {
  return <button onClick={onClick} className={style.button}>{text}</button> ;
}
