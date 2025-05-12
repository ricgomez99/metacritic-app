import { View, Text } from "react-native";
import { ScoreProps } from "../types/gameCardTypes";
import { calcScoreColors } from "../lib/clacScoreColors";

export default function Score({ score, maxScore }: ScoreProps) {
  const scoreColor = calcScoreColors(score, maxScore);
  const scoreClass = `${scoreColor} my-2 w-10 h-10 justify-center items-center rounded-full`;
  return (
    <View className={scoreClass}>
      <Text className="text-md font-bold text-white">{score}</Text>
    </View>
  );
}
