import { View, Text } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { CardProps } from "../types/gameCardTypes";
import Score from "./Score";

export default function GameCard({ title, url, score }: CardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={url} />
      <View style={styles.text_container}>
        <Text>{title}</Text>
        <Score score={score} maxScore={100} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    justifyContent: "space-between",
    alignContent: "center",
    gap: 12,
    padding: 8,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#eeee",
    maxWidth: 150,
  },

  text_container: {
    flex: 1,
    textAlign: "left",
    color: "#111",
  },

  image: {
    height: 147,
    borderRadius: 16,
    resizeMode: "cover",
  },
});
