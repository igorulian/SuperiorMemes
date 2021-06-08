import React, { Component } from 'react'
import Home from './src/pages/home/home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'



const Tab = createBottomTabNavigator();

const iconSize = 30

export default App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{style: {borderTopWidth: 0},activeTintColor: '#faf601', inactiveTintColor: '#faf60166' , showLabel: false ,tabStyle:{backgroundColor: '#282a2e'}}}>
 
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={iconSize}/>
            ),
          }}  
        />
        <Tab.Screen
          name="Upload"
          component={Home}
          options={{
            tabBarLabel: 'Upload',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="upload" color={color} size={iconSize + 5} />
            ),
          }}  
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="duck" color={color} size={iconSize + 10} />
            ),
          }}  
        />
        <Tab.Screen
          name="Like"
          component={Home}
          options={{
            tabBarLabel: 'Like',
            tabBarIcon: ({ color }) => (
              <AntDesign name="heart" color={color} size={iconSize} />
            ),
          }}  
        />
        <Tab.Screen
          name="Share"
          component={Home}
          options={{
            tabBarLabel: 'Share',
            tabBarIcon: ({ color }) => (
              <Fontisto name="share-a" color={color} size={iconSize} />
            ),
          }}  
        />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

