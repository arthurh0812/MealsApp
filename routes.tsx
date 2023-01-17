import {
  ParamListBase,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import Meal from "./models/meal";

export interface RouteParamList extends ParamListBase {
  MealsOverview: {
    categoryId: string;
  };
  Categories: {
    x: string;
  };
  MealScreen: {
    meal: Meal;
  };
}

export type ScreenProps<RouteName extends keyof RouteParamList> = {
  navigation: NavigationProp<RouteParamList, RouteName>;
  route: RouteProp<RouteParamList, RouteName>;
};
