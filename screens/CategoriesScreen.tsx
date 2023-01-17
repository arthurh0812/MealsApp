import React from "react";

import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";

import { CATEGORIES } from "../data/samples";
import CategoryProps from "../models/category";
import Category from "../components/Category";
import { ScreenProps } from "../routes";

function CategoriesScreen({ navigation }: ScreenProps<"Categories">) {
  function renderFunc({ item }: ListRenderItemInfo<CategoryProps>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return <Category data={item} onPress={pressHandler} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderFunc}
        keyExtractor={(item: CategoryProps) => item.id}
        contentContainerStyle={styles.categoriesList}
        numColumns={2}
        scrollEnabled={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  categoriesList: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default CategoriesScreen;
