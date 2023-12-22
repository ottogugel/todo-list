import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";

interface TaskProps {
  description: string;
  finished: boolean;
  onFinish: (description: string) => void;
  onRemove: (description: string) => void;
}

export function Task({ description, finished, onFinish, onRemove }: TaskProps) {
  return (
    <View >
      <View>
        <BouncyCheckbox
          size={20}
          fillColor="#5E60CE"
          unfillColor="transparent"
          innerIconStyle={{
            borderColor: `${finished ? "#5E60CE" : "#4EA8DE"}`,
          }}
          text={description}
          textStyle={{
            color: `${finished ? "#808080" : "#F2F2F2"}`,
          }}
          isChecked={finished}
          onPress={() => {
            onFinish(description);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => onRemove(description)}
      >
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
