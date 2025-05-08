import { View, Text } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import useDataContext from "../hooks/context/useDataContext";

export default function Details() {
  const { id } = useLocalSearchParams();
  const { getGameBySlug } = useDataContext();
  const selectedGame = getGameBySlug(id);
  const headerTitle = selectedGame?.name;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#e1e1e1" },
          headerTintColor: "black",
          headerLeft: () => (
            <Link href="/" className="text-blue-500">
              Volver
            </Link>
          ),
          headerRight: () => <></>,
          headerTitle: `${headerTitle}`,
        }}
      />
      <View>
        <Text className="mb-8 font-semibold text-2xl text-slate-500">
          {selectedGame?.name}
        </Text>
      </View>
    </Screen>
  );
}
