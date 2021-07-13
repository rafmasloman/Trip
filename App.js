/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Hotels, Trip, Payment} from './src/screen';
import Payment from './src/screen/Payment';
import Trip from './src/screen/Trip';
import Hotel from './src/screen/Hotel';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Trip}
          name="Trip"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Hotel}
          name="Hotel"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Payment}
          name="Payment"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
