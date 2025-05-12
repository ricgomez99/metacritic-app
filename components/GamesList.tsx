import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedCard } from "./AnimatedCard";
import useFilms from "../hooks/useFilms";
import Loader from "./Loader";

export default function GamesList() {
  const games = useFilms();

  return (
    <SafeAreaView className="justify-center">
      {!games?.length ? (
        <Loader />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedCard
              index={index}
              title={item.name}
              url={item.background_image}
              score={item.metacritic}
              slug={item.slug}
            />
          )}
          keyExtractor={(item) => item.slug}
        />
      )}
    </SafeAreaView>
  );
}
