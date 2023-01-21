import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { ScreenProps } from "../routes";

import Step from "../components/Step";
import Meal from "../models/meal";

function MealInfo(meal: Meal) {
  function toTime(mins: number): string {
    const numHours = mins / 60;
    const numMins = mins % 60;
    if (numHours < 1) return `${mins.toString()} min.`;
    return `${numHours}h` + (numMins > 0 ? ` ${numMins}min.` : "");
  }

  return (
    <View style={styles.mealInfo}>
      <Text style={styles.mealTitle}>{meal.title}</Text>
      <Text style={styles.mealInfoBox}>{toTime(meal.duration)}</Text>

      <Text style={styles.mealInfoBox}>{meal.ingredients.join("\n")}</Text>
    </View>
  );
}

function MealScreen({ route }: ScreenProps<"MealScreen">) {
  const meal = route.params.meal;

  const [showSteps, setShowSteps] = useState(false);

  const renderStep = ({ item, index }: ListRenderItemInfo<String>) => {
    if (showSteps || index < 1) {
      return (
        <Step
          index={index + 1}
          description={item}
          onPress={() => {
            if (index == 0) setShowSteps(!showSteps);
          }}
        />
      );
    }
    return <></>;
  };

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
        <FlatList
          ListHeaderComponent={() => MealInfo(meal)}
          data={meal.steps}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={renderStep}
        />
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
  mealImage: {
    flex: 1,
  },
  scrollContainer: {
    flex: 2,
  },
  scroll: {
    flex: 0,
  },
  mealInfo: {
    flex: 2,
    height: "60%",
    marginVertical: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mealTitle: {
    minWidth: "50%",
    maxWidth: "75%",
    backgroundColor: "lightgrey",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    fontWeight: "600",
    fontSize: 24,
  },
  mealInfoBox: {
    minWidth: "50%",
    maxWidth: "75%",
    textAlign: "center",
    backgroundColor: "lightgrey",
    paddingVertical: "2%",
    marginVertical: "5%",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default MealScreen;
