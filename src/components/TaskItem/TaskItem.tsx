import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Task } from "../../screens/Home";

interface TaskItemProps {
  item: Task;
  onCheck: () => void;
}

export const TaskItem = ({ item, onCheck }: TaskItemProps) => {
  return (
    <View className="">
      <TouchableOpacity onPress={onCheck}>
        {item.checked ? (
          <View className="">
            {/* <Image source={CheckIcon} style={styles.checkIcon} />*/}
          </View>
        ) : (
          <View className=""/>
        )}
      </TouchableOpacity>
      <Text className="">
        {item.task}
      </Text>
    </View>
  );
};
