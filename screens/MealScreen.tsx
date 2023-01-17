import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { ScreenProps } from "../routes";

function MealScreen({ route }: ScreenProps<"MealScreen">) {
  const meal = route.params.meal;

  function toTime(mins: number): string {
    const numHours = mins / 60;
    const numMins = mins % 60;
    if (numHours < 1) return `${mins.toString()} min.`;
    return `${numHours}h` + (numMins > 0 ? ` ${numMins}min.` : "");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.mealImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.mealInfo}>
            <Text style={styles.mealTitle}>{meal.title}</Text>
            <Text style={styles.mealInfoBox}>{toTime(meal.duration)}</Text>

            <Text style={styles.mealInfoBox}>
              {meal.ingredients.join("\n")}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 2,
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    width: "80%",
  },
  mealImage: {
    flex: 1,
  },
  mealInfo: {
    flex: 2,
    height: "60%",
    marginVertical: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mealTitle: {
    backgroundColor: "lightgrey",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    fontWeight: "600",
    fontSize: 24,
  },
  mealInfoBox: {
    minWidth: "50%",
    textAlign: "center",
    backgroundColor: "lightgrey",
    paddingVertical: "2%",

    marginVertical: "5%",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default MealScreen;
