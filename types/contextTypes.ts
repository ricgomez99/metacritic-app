import { FilmType } from "./filmTypes";

export interface ProviderProps {
  children: React.ReactNode;
}

export type DataContextType = {
  saveGameData: (games: FilmType[]) => void;
  getGamesData: () => FilmType[] | undefined;
  getGameBySlug: (slug: string | string[]) => FilmType | undefined;
};
