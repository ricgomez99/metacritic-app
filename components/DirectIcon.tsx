import { Link } from "expo-router";
import { Pressable } from "react-native";
import { CircleInfoIcon } from "./Icons";
import { DirectIconProps } from "../types/iconTypes";

export default function DirectIcon({ directTo }: DirectIconProps) {
  return (
    <Link asChild href={directTo}>
      <Pressable>
        <CircleInfoIcon color="black" />
      </Pressable>
    </Link>
  );
}
