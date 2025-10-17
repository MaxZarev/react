import './MovieCard.css';
import like from './../../assets/like.svg';
import star from './../../assets/star.svg';

export default function MovieCard({ img, title, link, rating }) {
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
        <a href="#" className="like-container">
          <img src={like} alt="like" />
          <div className="like-button">В избранное</div>
        </a>
      </div>
    </div>
  );
}
