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
import Category from "../models/category";
import { CATEGORIES, MEALS } from "../data/samples";
import { ScreenProps } from "../routes";

function MealsOverviewScreen({
  route,
  navigation,
}: ScreenProps<"MealsOverview">) {
  const catId = route.params.categoryId;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });
  const category = CATEGORIES.find((c) => c.id == catId) as Category;

  const renderFunc = ({ item }: ListRenderItemInfo<MealData>) => {
    function onPress() {
      navigation.navigate("MealScreen", { meal: item });
    }
    return (
      <Meal data={item} color={category.color as string} onPress={onPress} />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.mealsListContainer}>
        <FlatList
          data={meals}
          renderItem={renderFunc}
          keyExtractor={(meal: MealData) => meal.id}
          contentContainerStyle={styles.mealsList}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.title}>
          {meals.length > 0 ? meals.length : `no`} result
          {meals.length != 1 && "s"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },
  mealsListContainer: {
    flex: 20,
  },
  mealsList: {
    flex: 0,
    alignItems: "flex-start",
  },
  infoBox: {
    flex: 1,
    alignItems: "center",
    marginBottom: 24,
  },
});

export default MealsOverviewScreen;
