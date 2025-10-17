import './MovieCard.css';
import like from './../../assets/like.svg';
import liked from './../../assets/liked.svg';
import star from './../../assets/star.svg';

export default function MovieCard({ img, title, link, rating, isLike }) {
  return (
    <div className="card-container" style={{ '--poster-img': `url("${img}")` }}>
      <div className="poster-section">
        <div className="rating-container">
          <img src={star} alt="rating" />
          {rating}
        </div>
        <a href={link}>
          <img className="poster" src={img} alt={title} />
        </a>
      </div>
      <div className="info-block">
        <a href={link}>
          <p className="title">{title}</p>
        </a>
        
        <a href="#" className={isLike ? "liked-container" : "like-container"}>
          <img src={isLike ? liked : like } alt="like" />
          <div className="like-button">{isLike ? "В избранном" : "В избранное"}</div>
        </a>
      </div>
    </div>
  );
}
