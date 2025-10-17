import './MovieGrid.css';
import MovieCard from './../MovieCard/MovieCard';

export default function MovieGrid() {
  return (
    <div className="grid-container">
      <MovieCard
        img="/src/assets/black-widow.png"
        title="Black Widow"
        link="#"
        rating="324"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/Shang Chi.jpg"
        title="Shang Chi"
        link="#"
        rating="124"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/Loki.jpg"
        title="Loki"
        link="#"
        rating="235"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/How I Met Your Mother.jpg"
        title="How I Met Your Mother"
        link="#"
        rating="123"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/Money Heist.jpg"
        title="Money Heist"
        link="#"
        rating="8125"
        isLike={true}
      />
      <MovieCard
        img="/src/assets/Friends.jpg"
        title="Friends"
        link="#"
        rating="123"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/The Big Bang Theory.jpg"
        title="The Big Bang Theory"
        link="#"
        rating="12"
        isLike={false}
      />
      <MovieCard
        img="/src/assets/Two And a Half Men.jpg"
        title="Two And a Half Men"
        link="#"
        rating="456"
        isLike={false}
      />
    </div>
  );
}
