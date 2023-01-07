import {
  ParamListBase,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";

export interface RouteParamList extends ParamListBase {
  MealsOverview: {
    categoryId: string;
  };
  Categories: {
    x: string;
  };
}

export type ScreenProps<RouteName extends keyof RouteParamList> = {
  navigation: NavigationProp<RouteParamList, RouteName>;
  route: RouteProp<RouteParamList, RouteName>;
};
