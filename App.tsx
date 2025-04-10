import { StyleSheet, Image, View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const URL =
  "https://images2.medimops.eu/product/933395/M02302056388-source.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={{ uri: URL }} />
      <Button onPress={() => alert("Hello!")} title="Press here" />
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#111",
  },

  image: {
    width: 215,
    height: 294,
    resizeMode: "center",
  },
});
