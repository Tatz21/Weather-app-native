import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';


import WeatherScreen from './Screens/WeatherScreen';

const AppStack = createStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
       
        <AppStack.Screen name="Weather" component={WeatherScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;