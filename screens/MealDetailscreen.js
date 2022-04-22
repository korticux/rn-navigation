import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';

 const MealDetailscreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const SelectMeal = MEALS.find(meal => meal.id === mealId);

     return (
         <View style={styles.screen}>
             <Text>{selectedMeal.title}</Text>
             <Button 
             title="Go Back to Categories"
              onPress={() => {
                 props.navigation.popToTop();
             }} />
         </View>
     );
 };

MealDetailscreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return selectedMeal;
}

 const styles = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
 })

 export default MealDetailscreen;