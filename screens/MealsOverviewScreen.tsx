import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import Meal from "../components/Meal";

import MealData from "../models/meal";
import { MEALS } from "../data/samples";
import { RouteProp } from "@react-navigation/native";
import { RouteParamList, ScreenProps } from "../routes";

function MealsOverviewScreen({ route }: ScreenProps<"MealsOverview">) {
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(route.params.categoryId);
  });

  const renderFunc = ({ item }: ListRenderItemInfo<MealData>) => {
    return <Meal data={item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderFunc}
        keyExtractor={(meal: MealData) => meal.id}
      />
      <Text style={styles.title}>{meals.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },
});

export default MealsOverviewScreen;
