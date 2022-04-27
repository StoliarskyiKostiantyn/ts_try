import { useState } from "react";

interface Props {
  onSubmit: (title: string) => void;
}

export default function SearchForm({ onSubmit }: Props) {
  const [filmName, setFilmName] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(filmName);
    setFilmName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} name="search">
        <input
          type="text"
          value={filmName}
          onChange={(e) => {
            setFilmName(e.target.value);
          }}
          placeholder="Введите название фильма"
          title="Ведите название фильма"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
