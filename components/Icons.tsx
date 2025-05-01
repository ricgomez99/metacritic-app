import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "../types/iconTypes";

export const CircleInfoIcon = ({ size = 24, color = "white" }: IconProps) => (
  <FontAwesome name="info-circle" size={size} color={color} />
);

export const HomeIcon = ({ size = 24, color = "white" }: IconProps) => (
  <FontAwesome name="home" size={size} color={color} />
);
