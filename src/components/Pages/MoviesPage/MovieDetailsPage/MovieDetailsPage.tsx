import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useNavigate, Routes } from "react-router";
import api from "../../../../services/fetchMovies";
import { Link, Route, useLocation } from "react-router-dom";
interface IFilm {
  title: string;
  overview: string;
  filmId: string;
  poster_path: string;
}
const Cast = lazy(() => import("../Cast/Cast"));
const Review = lazy(() => import("../Review/Review"));
export default function MovieDetailsPage() {
  const { filmId } = useParams() as {
    filmId: string;
  };
  const [film, setFilm] = useState<IFilm | null>(null);
  const history = useNavigate();
  useEffect(() => {
    api.fetchMovieById(filmId).then(setFilm);
  }, []);
  const handleGoHome = () => {
    history("/");
  };
  return (
    <>
      <button onClick={handleGoHome}>Go home</button>
      {film && (
        <>
          <h1>{film.title}</h1>
          <img
            width="200"
            alt="Poster"
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          />
          <p>{film.overview}</p>
        </>
      )}
      <hr />
      <Link to={`/movies/${filmId}/cast`}>Cast</Link>
      <br />
      <Link to={`/movies/${filmId}/review`}>Review</Link>
      <Routes>
        <Route path={`/movies/${filmId}/cast`} element={<Cast />} />
        <Route path={`/movies/${filmId}/review`} element={<Review />} />
      </Routes>
    </>
  );
}
