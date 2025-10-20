import style from './Paragraph.module.css'; 

export default function Paragraph({ text }) {
  return (
    <p className={style['paragraph-container']}>
      { text }
    </p>
  );
}

