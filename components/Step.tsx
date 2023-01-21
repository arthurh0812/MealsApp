import React from "react";

import {
  View,
  Text,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
} from "react-native";

type StepProps = {
  description: String;
  index: number;
  onPress: (e: GestureResponderEvent) => void;
};

function Step({ description, index, onPress }: StepProps) {
  return (
    <View style={styles.stepContainer}>
      <Pressable onPress={onPress}>
        <Text>
          {index}. {description}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    borderRadius: 40,
    backgroundColor: "lightgrey",
    padding: 20,
    marginBottom: 10,
  },
});

export default Step;
