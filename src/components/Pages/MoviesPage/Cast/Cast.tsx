import { useParams } from "react-router";
import { useState, useEffect } from "react";
import api from "../../../../services/fetchMovies";

interface ICast {
  id: string;
  name: string;
  profile_path: string;
}
export default function Cast() {
  const { filmId } = useParams() as {
    filmId: string;
  };
  const [cast, setCast] = useState<ICast[]>([]);
  useEffect(() => {
    api.fetchCast(filmId).then((data) => setCast(data.cast));
  }, []);
  console.log(cast);
  return (
    <>
      <ul>
        {cast &&
          cast.map((cas) => {
            return (
              <li key={cas.id}>
                <p>{cas.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cas.profile_path}`}
                  width="100"
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
