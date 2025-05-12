import { View, Text } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import useDataContext from "../hooks/context/useDataContext";
import { ScrollView } from "react-native";
import Score from "../components/Score";
import { Image } from "expo-image";

export default function Details() {
  const { id } = useLocalSearchParams();
  const { getGameBySlug } = useDataContext();
  const selectedGame = getGameBySlug(id);
  const headerTitle = selectedGame?.name;
  const gameScore = selectedGame?.metacritic ? selectedGame.metacritic : 99;

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
      <ScrollView>
        <View className="justify-center items-center text-center">
          <Image
            source={selectedGame?.background_image}
            style={{ width: 320, height: 400, borderRadius: 16 }}
            alt={`${selectedGame?.slug} cover image`}
          />
          <Text className="my-4 font-semibold text-2xl text-slate-500">
            {selectedGame?.name}
          </Text>
          <View className="flex-row w-60 justify-between items-center">
            <Text className="text-slate-500 font-semibold text-xl">
              {selectedGame?.released}
            </Text>
            <Score score={gameScore} maxScore={100} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
