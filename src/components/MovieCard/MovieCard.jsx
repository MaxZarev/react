import { useState } from 'react';
import style from './MovieCard.module.css';
import cn from 'classnames'

export default function MovieCard({ img, title, link, rating, isLike }) {
  const [like, setLike] = useState(isLike);
  const [newRating, setNewRating] = useState(Number(rating));
  const handleLike = (e) => {
    e.preventDefault();
    setLike(like ? false : true);
    setNewRating((prev) => (like ? prev - 1 : prev + 1));
  };
  return (
    <div
      className={style["card-container"]}
      // @ts-ignore
      style={{ '--poster-img': `url("${img}")` }}
    >
      <div className={style["poster-section"]}>
        <div className={style["rating-container"]}>
          <img src="./star.svg" alt="rating" />
          {newRating}
        </div>
        <a href={link}>
          <img className={style["poster"]} src={img} alt={title} />
        </a>
      </div>
      <div className={style["info-block"]}>
        <a href={link}>
          <p className={style["title"]}>{title}</p>
        </a>

        <a
          onClick={handleLike}
          href="#"
          className={cn({
            [style['like-container']]: !like,
            [style['liked-container']]: like
          })}
        >
          <img src={like ? './liked.svg' : './like.svg'} alt="like" />
          <div className={style["like-button"]}>
            {like ? 'В избранном' : 'В избранное'}
          </div>
        </a>
      </div>
    </div>
  );
}
