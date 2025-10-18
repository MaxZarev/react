import { useState } from 'react';
import './MovieCard.css';

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
      className="card-container"
      // @ts-ignore
      style={{ '--poster-img': `url("${img}")` }}
    >
      <div className="poster-section">
        <div className="rating-container">
          <img src="./star.svg" alt="rating" />
          {newRating}
        </div>
        <a href={link}>
          <img className="poster" src={img} alt={title} />
        </a>
      </div>
      <div className="info-block">
        <a href={link}>
          <p className="title">{title}</p>
        </a>

        <a
          onClick={handleLike}
          href="#"
          className={like ? 'liked-container' : 'like-container'}
        >
          <img src={like ? './liked.svg' : './like.svg'} alt="like" />
          <div className="like-button">
            {like ? 'В избранном' : 'В избранное'}
          </div>
        </a>
      </div>
    </div>
  );
}
