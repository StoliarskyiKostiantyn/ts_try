import React from "react";
import SearchForm from "../../SearchForm/SearchForm";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import api from "../../../services/fetchMovies";

interface FilmData {
  name: string;
  id: number;
  title: string;
}

export default function MoviesPage() {
  const [filmName, setFilmName] = useState("");
  const [filmListByName, setFilmListByName] = useState<FilmData[]>([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (filmName === "") {
      return;
    } else {
      if (filmName !== "") {
        api
          .fetchMovieByName(filmName)
          .then((data) => setFilmListByName(data.results));
      }
    }
  }, [filmName]);
  const handleSubmit = (title: string) => {
    if (title.trim() === "") {
      alert("Введите ключевое слово для поиска фильма");
      return;
    }
    setFilmName(title);
  };
  return (
    <>
      <h1>MoviesPage</h1>
      <SearchForm onSubmit={handleSubmit} />
      <ul>
        {filmListByName &&
          filmListByName.map((film) => (
            <li key={film.id}>
              <Link to={`${pathname}/${film.id}`}>{film.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
