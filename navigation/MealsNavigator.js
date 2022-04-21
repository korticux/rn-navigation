import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailscreen from '../screens/MealDetailscreen';
import Colors from '../constants/Colors';
import CategoryMealScreen from '../screens/CategoryMealsScreen';

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
)   

export default createAppContainer(MealsNavigator);