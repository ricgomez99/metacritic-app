import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Details() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="mb-8 font-semibold text-2xl text-slate-500">
          Details
        </Text>
        <Link href="/" className="text-blue-500">
          Volver
        </Link>
      </View>
    </View>
  );
}
