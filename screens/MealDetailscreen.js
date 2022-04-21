import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

 const MealDetailscreen = props => {
     return (
         <View style={styles.screen}>
             <Text>Meal details screen !</Text>
             <Button title="Go Back to Categories" onPress={() => {
                 props.navigation.popToTop();
             }} />
         </View>
     );
 };

 const styles = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
 })

 export default MealDetailscreen;