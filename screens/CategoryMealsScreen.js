import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

 const CategoryMealScreen = props => {
        console.log("error de props -->",props);
        const catId = props.navigation.getParam('categoryId');

        const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

     return (
         <View style={styles.screen}>
             <Text>Category meals screen !</Text>
             {/* <Text>{selectedCategory.title}</Text> */}
             <Button 
             title="Go to Details"
                onPress={()  => {
                 props.navigation.navigate({
                    routeName: 'MealDetail'
                 });
             }} />
             <Button 
             title="Go Back" 
             onPress={() => { 
                 props.navigation.pop();
             }} />
         </View>
     );
 };

 CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

     const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

     return selectedCategory;
     };
 

 const styles = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
 })

 export default CategoryMealScreen;