import { ScrollView, Text } from "react-native";
import Screen from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView className="text-slate-500">
        <Text className="font-bold mb-8 text-2xl">About the project</Text>
        <Text className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat animi
          atque dolores ipsum, incidunt possimus distinctio cumque, obcaecati
          qui cum quae iure optio aliquid odio, nam fuga ad beatae eaque? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Dolores, distinctio
          repudiandae. Voluptas repellendus aperiam, molestias esse beatae
          recusandae! Veritatis nostrum nemo aliquam, ratione ab ea aspernatur
          perspiciatis facere odio similique? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Error nihil odit unde, rerum quisquam
          inventore, totam voluptatibus placeat pariatur nemo a, deserunt non
          hic ab voluptatum itaque veniam qui reiciendis!
        </Text>
      </ScrollView>
    </Screen>
  );
}
