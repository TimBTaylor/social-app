import React from "react";
import { View, Text, Button } from "react-native";

export const Home = (props) => {
  return (
    <View>
      <Text>Home Screen1</Text>
      <Button
        title="home screen 2"
        onPress={() => props.navigation.navigate("Home2")}
      />
    </View>
  );
};
