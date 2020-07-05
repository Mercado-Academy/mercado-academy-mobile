/* eslint-disable react/display-name */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import { BottomTabParamList, HomeParamList, CoursesParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar';
import TrailsScreen from '../screens/TrailsScreen/trails';
import Courses from '../screens/CoursesScreen/courses';
import Profile from '../screens/Profile';
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

const CoursesStack = createStackNavigator<CoursesParamList>();

function CoursesStackNavigator() {
  return (
    <CoursesStack.Navigator
      initialRouteName="Trails"
      screenOptions={{ headerShown: false }}
    >
      <CoursesStack.Screen name="Trails" component={TrailsScreen} />
      <CoursesStack.Screen name="Courses" component={Courses} />
      <CoursesStack.Screen name="TrackComplete" component={TrackComplete} />
    </CoursesStack.Navigator>
  );
}

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
        component={CoursesStackNavigator}
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
        name="Perfil"
        component={Profile}
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
