import style from './MovieGrid.module.css';
import MovieCard from './../MovieCard/MovieCard';

export default function MovieGrid() {

  const data = [
    {
      img: "./black-widow.png",
      title: "Black Widow",
      link: "#",
      rating: "324",
      isLike: false,
    },
    {
      img: "./Shang Chi.jpg",
      title: "Shang Chi",
      link: "#",
      rating: "124",
      isLike: false
    },
    {
      img: "./Loki.jpg",
      title: "Loki",
      link: "#",
      rating: "235",
      isLike: false
    },
    {
      img: "./How I Met Your Mother.jpg",
      title: "How I Met Your Mother",
      link: "#",
      rating: "123",
      isLike: false
    },
    {
      img: "./Money Heist.jpg",
      title: "Money Heist",
      link: "#",
      rating: "8125",
      isLike: true
    },
    {
      img: "./Friends.jpg",
      title: "Friends",
      link: "#",
      rating: "123",
      isLike: false
    },
    {
      img: "./The Big Bang Theory.jpg",
      title: "The Big Bang Theory",
      link: "#",
      rating: "12",
      isLike: false
    },
    {
      img: "./Two And a Half Men.jpg",
      title: "Two And a Half Men",
      link: "#",
      rating: "456",
      isLike: false
    }
  ]
  data.map(el => el.id = crypto.randomUUID())
  
  return (
    <div className={style['grid-container']}>
      {data.map((movie) => (
        <MovieCard
          key={movie.id}
          img={movie.img}
          title={movie.title}
          link={movie.link}
          rating={movie.rating}
          isLike={movie.isLike}
        />
      ))}
    </div>
  );
}
