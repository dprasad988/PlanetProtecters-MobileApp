import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecentsScreen from './RecentsScreen';
import FavoritesScreen from './FavoritesScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Recents') {
            iconName = 'restore';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite';
          } else if (route.name === 'Nearby') {
            iconName = 'location-on';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Recents" component={RecentsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      {/* <Tab.Screen name="Nearby" component={NearbyScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
