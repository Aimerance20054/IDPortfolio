import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import ProjectsScreen from './src/screens/ProjectScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProjectDetailsScreen from './src/ProjectDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsList"
        component={ProjectsScreen}
        options={{ title: 'My Projects' }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{ title: 'Project Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2457C5' },
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#2457C5',
          tabBarInactiveTintColor: '#64748B',
          tabBarLabelStyle: { fontSize: 11 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{ title: 'My Skills' }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsStack}
          options={{ title: 'My Projects', headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About Me' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}