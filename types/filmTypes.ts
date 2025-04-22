export interface FilmType {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  metacritic: number;
  playtime: number;
}

type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};
