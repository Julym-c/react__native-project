import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Coins from './Coins';
import CoinsDetail from './CoinsDetail';

/*Siempre va para poder poner la navegación de las pantallas*/
const Stack = createStackNavigator(); /*crear el componente, el metodo crea el componente*/

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Coins" 
                component={Coins}
            />
            
            <Stack.Screen 
                name="Coins__Detail" 
                component={CoinsDetail}
            />
        </Stack.Navigator>
    );
}

export default CoinsStack;