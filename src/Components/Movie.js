


const Movie = (props) => {
  return (
    <div className="movie-card">
      <img className="movie-image" src={props.img} alt="" />
      <div className="movie-details">
        <h2 className="movie-title">{props.title}</h2>
        <p className="movie-year">Year: {props.year}</p>
      </div>
    </div>
  );
}

export default Movie;
