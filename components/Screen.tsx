import { View } from "react-native";
import { ScreenLayoutProps } from "../types/layoutTypes";

export default function Screen({ children }: ScreenLayoutProps) {
  return <View className="pt-4">{children}</View>;
}
