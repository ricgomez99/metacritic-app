import { View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";
import DirectIcon from "../components/DirectIcon";
import DataContextProvider from "../hooks/context/DataContextProvider";

export default function Layout() {
  return (
    <DataContextProvider>
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
    </DataContextProvider>
  );
}
