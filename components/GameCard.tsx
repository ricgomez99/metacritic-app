import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { CardProps } from "../types/gameCardTypes";
import { Link } from "expo-router";
import Score from "./Score";

export default function GameCard({ title, url, score, slug }: CardProps) {
  return (
    <Link asChild href={`/${slug}`}>
      <Pressable className="active:opacity-70 border border-transparent active:border-black/50 mg-2 bg-gray-500/10 rounded-3xl p-4 my-2 flex-shrink-1 flex-grow-0">
        <View className="gap-2">
          <Image style={styles.image} source={url} />
          <View>
            <Text>{title}</Text>
            <Score score={score} maxScore={100} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 147,
    borderRadius: 16,
    resizeMode: "cover",
  },
});
