import { useState, useEffect } from "react";
import api from "../../../services/fetchMovies";
import { Link, useLocation } from "react-router-dom";

interface FilmData {
  name: string;
  id: number;
  title: string;
}
export default function HomePage() {
  const [filmList, setFilmList] = useState<FilmData[]>([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (filmList !== []) {
      api.fetchMovie().then((data) => setFilmList(data.results));
    }
  }, []);

  return (
    <>
      <h1>HOMEPAGE</h1>
      <ul>
        {filmList.map((item) => {
          if (item.name !== undefined) {
            return (
              <li key={item.id}>
                <Link to={`${pathname}/${item.id}`}>{item.name}</Link>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`}>{item.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
