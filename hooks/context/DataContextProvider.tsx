import { useState } from "react";
import { ProviderProps } from "../../types/contextTypes";
import { FilmType } from "../../types/filmTypes";
import DataContext from "../../components/context/DataContext";

export default function DataContextProvider({ children }: ProviderProps) {
  const [gamesData, setGamesData] = useState<FilmType[]>();
  const saveGameData = (games: FilmType[]) => setGamesData(games);
  const getGamesData = () => gamesData;
  const getGameBySlug = (slug: string | string[]) =>
    gamesData && gamesData.find((game) => game.slug === slug);

  return (
    <DataContext.Provider value={{ saveGameData, getGamesData, getGameBySlug }}>
      {children}
    </DataContext.Provider>
  );
}
