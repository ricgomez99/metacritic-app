import axios, { AxiosError } from "axios";
import { FilmType } from "../types/filmTypes";

export const fetchFilms = async () => {
  try {
    const url = process.env.EXPO_PUBLIC_API_URL;
    const { data } = await axios.get(`${url}`);
    const films = data.results.map((item: FilmType) => ({
      id: item.id,
      slug: item.slug,
      name: item.name,
      released: item.released,
      tba: item.tba,
      background_image: item.background_image,
      rating: item.rating,
      rating_top: item.rating_top,
      ratings: item.ratings,
      metacritic: item.metacritic,
      playtime: item.playtime,
    }));

    return films;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log({
        message: error.message,
        code: error.code,
        data: error.cause,
        status: error.status,
      });
    }
  }
};
