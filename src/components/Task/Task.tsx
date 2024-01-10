import { Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

interface TaskProps {
  name: string;
  onRemove: () => void;
}

export function Task({name, onRemove }: TaskProps) {
  return (
    <View className="flex-row shadow border bg-neutral-800 border-zinc-800 rounded-lg mb-2 items-center">
      <View className="ml-5">
        <TouchableOpacity>
          <Entypo name="circle" size={20} color="#4EA8DE" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center">
        <Text className="text-white text-sm ml-4">{name}</Text>
      </View>
      <View className="w-10">
        <TouchableOpacity onPress={onRemove}>
          <Feather name="trash-2" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
