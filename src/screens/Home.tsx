import { View } from "react-native";
import Header from "../components/Header";
import { InputButton } from "../components/InputButton";

export function Home() {
  return (
    <View className="flex-1 bg-gray550">
      <Header />
      <InputButton />
    </View>
  );
}