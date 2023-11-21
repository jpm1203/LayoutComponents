import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home-screen';
import AboutScreen from './screens/about-screen';

export default function App() {

  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}