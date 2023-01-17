import React from "react";

import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  GestureResponderEvent,
} from "react-native";
import CategoryData from "../models/category";

type CategoryProps = {
  data: CategoryData;
  onPress: (e: GestureResponderEvent) => void;
};

function Category({ data, onPress }: CategoryProps) {
  return (
    <View style={styles.categoryContainer}>
      <Pressable
        android_ripple={{ color: "lightgrey" }}
        style={({ pressed }) => [
          styles.categoryBtn,
          { backgroundColor: data.color, opacity: pressed ? 0.6 : 1 },
        ]}
        onPress={onPress}
      >
        <Text style={styles.categoryTitle}>{data.title}</Text>
        <Text style={styles.categoryId}>{data.id}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    marginHorizontal: 12,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  categoryBtn: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "24%",
    borderRadius: 10,
  },
  categoryTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  categoryId: {
    fontWeight: "400",
    fontSize: 14,
  },
});

export default Category;
