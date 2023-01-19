import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import { CATEGORIES } from "./data/samples";
import { ScreenProps } from "./routes";

const Stack = createNativeStackNavigator();

const defaultHeaderStyle = {
  color: "black",
  fontWeight: "700",
  fontSize: 20,
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{ headerTitleStyle: defaultHeaderStyle }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Select a Category",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route }) => ({
              title: `${
                CATEGORIES.find((m) => m.id == route.params.categoryId)?.title
              } Overview`,
            })}
            initialParams={{ categoryId: "c1" }}
          />
          <Stack.Screen
            name="MealScreen"
            component={MealScreen}
            options={({ route }) => {
              const meal = route.params.meal;
              return {
                title: meal.title,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "stretch",
    justifyContent: "center",
  },
});
