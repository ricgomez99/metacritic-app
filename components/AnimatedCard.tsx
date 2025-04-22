import { Animated } from "react-native";
import { AnimatedCardProps } from "../types/gameCardTypes";
import { useEffect, useRef } from "react";
import GameCard from "./GameCard";

export function AnimatedCard({ index, title, url }: AnimatedCardProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard title={title} url={url} />
    </Animated.View>
  );
}
