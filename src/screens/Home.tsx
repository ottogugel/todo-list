import { FlatList, View } from "react-native";
import Header from "../components/Header";
import { InputButton } from "../components/InputButton";
import { Task } from "../components/Task/Task";
import React from "react";

export function Home() {

interface Task {
  description: string;
  finished: boolean;
}

  return (
    <View className="flex-1 bg-gray550">
      <Header />
      <InputButton />

      {/*
      <View>
        <FlatList
          data={''}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Task
              description={item.description}
              finished={item.finished}
              onFinish={""}
              onRemove={""}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={}
        />
      </View>
      */}
    </View>
  );
}