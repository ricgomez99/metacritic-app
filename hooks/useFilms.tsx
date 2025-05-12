import { useEffect } from "react";
import { fetchFilms } from "../lib/fetchFilms";
import useDataContext from "./context/useDataContext";

export default function useFilms() {
  const { saveGameData, getGamesData } = useDataContext();
  const films = getGamesData();

  const getFilms = async () => {
    const data = await fetchFilms();
    saveGameData(data);
  };

  useEffect(() => {
    if (!films) {
      getFilms();
    }
  }, [films]);

  return films;
}
