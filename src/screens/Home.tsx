import { Alert, FlatList, TextInput, TouchableOpacity, View, Text } from "react-native";
import Header from "../components/Header";
import colors from 'tailwindcss/colors'
import { AntDesign } from '@expo/vector-icons'
import { Task } from "../components/Task/Task";
import React, { useState } from 'react';

export function Home() {

interface Task {
  description: string;
  finished: boolean;
}

const [tasks, setTasks] = useState<string[]>([]);
const [taskName, setTaskName] = useState("");

function handleTaskAdd() {
  if(tasks.includes(taskName)) {
    return Alert.alert(
      "Tasks exists",
      "There is already a task on the list with that name"
    );
  }

    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
}
function handleTaskRemove(name: string) {
  Alert.alert("Delete", `Remove the task ${name}?`, [
    {
      text: "Yes",
      onPress: () =>
        setTasks((prevState) => prevState.filter((task) => task !== name)
        ),
    },
    {
      text: "No",
      style: "cancel",
    },
  ]);
  console.log(`Você clicou em remover a tarefa ${name}`);
}

  return (
    <View className="flex-1 bg-gray550">
      <Header />

      <View className="flex-row justify-start items-center gap-2 ml-0">
        <TextInput
          className="h-16 w-72 p-4 bg-gray550 text-sm text-gray-300 border rounded-md"
          placeholder="Add a new task"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <View className="flex justify-center items-end">
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-bluedark w-16 h-16 items-center justify-center rounded-md"
            onPress={handleTaskAdd}
          >
            <AntDesign name="pluscircleo" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex p-4">
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text className="text-white text-sm text-center p-4">
              Haven't added any tasks yet? Add tasks to your list.
            </Text>
          )}
        />
      </View>
    </View>
  );
}