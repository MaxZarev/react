import './Button.css';

export default function Search( { onClick, text }) {
  return <button onClick={onClick} className="button">{text}</button> ;
}
