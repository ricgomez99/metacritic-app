import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFilms from "../hooks/useFilms";
import GameCard from "./GameCard";
import Loader from "./Loader";
import { Logo } from "./Logo";
import { AnimatedCard } from "./AnimatedCard";

export default function Main() {
  const films = useFilms();

  return (
    <>
      {!films?.length ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <Logo />
          <FlatList
            data={films}
            renderItem={({ item, index }) => (
              <AnimatedCard
                index={index}
                title={item.name}
                url={item.background_image}
              />
            )}
            keyExtractor={(item) => item.slug}
          />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  title: {
    color: "#111",
  },
});
