import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { darkenColor } from "../utilities/utilities";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  const categoryColor = CATEGORIES.find(
    (category) => category.id === catId
  ).color;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: categoryColor },
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      catId: catId,
    };
    return (
      <MealItem
        {...mealItemProps}
        style={{ backgroundColor: darkenColor(categoryColor, 30) }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        column={2}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
