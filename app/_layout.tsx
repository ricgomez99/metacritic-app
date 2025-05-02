import { View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";
import DirectIcon from "../components/DirectIcon";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "transparent" },
          headerTitle: "",
          headerBlurEffect: "light",
          headerLeft: () => <Logo />,
          headerRight: () => <DirectIcon directTo="/about" />,
        }}
      />
    </View>
  );
}
