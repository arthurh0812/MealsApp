import React from "react";

import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

function ExampleScreen() {
  return (
    <View style={styles.screen}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  categoriesList: {
    flex: 1,
  },
});

export default ExampleScreen;
