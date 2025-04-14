import { useState, useEffect } from "react";
import { fetchFilms } from "../lib/fetchFilms";
import { FilmType } from "../types/filmTypes";

export default function useFilms() {
  const [films, setFilms] = useState<FilmType[]>();
  const getFilms = async () => {
    const data = await fetchFilms();
    setFilms(data);
  };

  useEffect(() => {
    if (!films) {
      getFilms();
    }
  }, [films]);

  return films;
}
