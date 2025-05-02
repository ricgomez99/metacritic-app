import { View, Text } from "react-native";
import { ScoreProps } from "../types/gameCardTypes";
import { calcScoreColors } from "../lib/clacScoreColors";

export default function Score({ score, maxScore }: ScoreProps) {
  const roundedScore = Math.round(score);
  const scoreColor = calcScoreColors(roundedScore, maxScore);

  return (
    <View
      // eslint-disable-next-line prettier/prettier
      className={`${scoreColor} my-2 w-8 h-8 justify-center items-center rounded-full`}>
      <Text className="text-md font-bold text-white">{roundedScore}</Text>
    </View>
  );
}
