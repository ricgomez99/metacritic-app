import { View } from "react-native";
import { Logo } from "./Logo";
import DirectIcon from "./DirectIcon";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mx-auto">
      <View>
        <Logo />
      </View>
      <DirectIcon directTo="/about" />
    </View>
  );
}
