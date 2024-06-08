import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomTabNavigator from './Dev-supun/BottomTabNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
