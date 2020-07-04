/* eslint-disable react/display-name */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar';
import TrackComplete from '../screens/TrackComplete';

interface TabBarIconProps {
  size: number;
  color: string;
  name: string;
}
const TabBarIconProps: React.FC<TabBarIconProps> = ({ ...props }) => {
  return <MaterialCommunityIcons style={{ marginBottom: -3 }} {...props} />;
};

TabBarIconProps.displayName = 'TabBarIcon';

const HomeStack = createStackNavigator<HomeParamList>();

function HomeTabNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Tab One Title', headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function HomeTabNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: 'Tab Two Title' }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.light.tint,
        tabStyle: {
          backgroundColor: '#00000000',
        },
      }}
      tabBar={TabBar}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIconProps name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cursos"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIconProps
              name="book-open-page-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Agenda"
        component={TrackComplete}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIconProps name="calendar-today" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIconProps name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
