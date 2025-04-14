import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFilms from "../hooks/useFilms";

export default function Main() {
  const films = useFilms();

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={films}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.image}
                source={{ uri: item.background_image }}
              />
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#111",
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    resizeMode: "center",
  },
});
