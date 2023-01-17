import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  Image,
  Dimensions,
} from "react-native";

import MealData from "../models/meal";

type MealProps = {
  data: MealData;
  color: string;
  onPress: (e: GestureResponderEvent) => void;
};

const win = Dimensions.get("window");

function Meal({ data, color, onPress }: MealProps) {
  return (
    <View style={styles.mealContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.mealBtn,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        onPress={onPress}
      >
        <View style={styles.mealInner}>
          <View style={styles.mealBackground}>
            <Image style={styles.mealImage} source={{ uri: data.imageUrl }} />
          </View>
          <View style={[styles.overlay, { backgroundColor: color }]}></View>
          <View style={styles.mealInfo}>
            <Text style={styles.mealTitle}>{data.title}</Text>
            <Text style={styles.mealDuration}>ca. {data.duration} min.</Text>
            <Text style={styles.mealComplexity}>
              {data.complexity.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const margin = 20;

const styles = StyleSheet.create({
  mealContainer: {
    marginVertical: margin / 2,
    marginHorizontal: margin,
  },
  mealBtn: {},
  mealInner: {},
  mealBackground: {},
  mealImage: {
    width: win.width - margin * 2,
    height: win.width / 2,
    borderRadius: margin,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0.2,
    zIndex: 1,
    borderRadius: margin,
  },
  mealInfo: {
    position: "absolute",
    top: margin,
    left: margin,
    right: margin,
    bottom: margin,
    zIndex: 2,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  mealDuration: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  mealComplexity: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
});

export default Meal;
