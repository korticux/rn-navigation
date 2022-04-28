import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailscreen from '../screens/MealDetailscreen';
import Colors from '../constants/Colors';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealScreen
        },
        MealDetail: MealDetailscreen
    },
    {
        // initialRouteName: 'Cateogries',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android'  ? Colors.primaryColor : ''
            },
            headerTintColor: 
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen'
        }
    }
);   

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);