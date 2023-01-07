import React from "react";

import { StyleSheet, View, Text, Pressable } from "react-native";

import MealData from "../models/meal";

type MealProps = {
  data: MealData;
};

function Meal({ data }: MealProps) {
  return (
    <View style={styles.mealContainer}>
      <Pressable style={styles.mealBtn}>
        <Text style={styles.mealTitle}>{data.title}</Text>
        <Text style={styles.mealDuration}>ca. {data.duration} min.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
  },
  mealBtn: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  mealDuration: {
    fontSize: 16,
    fontWeight: "500",
    color: "lightgrey",
  },
});

export default Meal;
