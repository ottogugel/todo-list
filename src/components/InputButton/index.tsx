import { TextInput, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors'
import { AntDesign } from '@expo/vector-icons'

export function InputButton() {
  return (
    <View className="flex-row items-center justify-center">
      <TextInput
        className="flex p-4 bg-white"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <View className="flex justify-center items-end">
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-bluedark w-16 h-16 items-center justify-center"
        >
          <AntDesign name="pluscircleo" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}