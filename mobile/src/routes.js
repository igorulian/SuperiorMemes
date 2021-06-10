import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home/home'
import Authenticate from './pages/authenticate/authenticate'

const Tab = createBottomTabNavigator()

const iconSize = 30

const PrivateRoute = (comp) => {
    const token = null
    if(!token)
        return Authenticate
    return comp
}


export const TabRoutes = () => (
  <Tab.Navigator keyboardHidesTabBar={true} initialRouteName="Home" tabBarOptions={{style: {borderTopWidth: 0, position: 'absolute'},activeTintColor: '#faf601', inactiveTintColor: '#faf60166' , showLabel: false ,tabStyle:{backgroundColor: '#282a2e'}}}>
      <Tab.Screen
        name="Profile"
        component={PrivateRoute(Home)}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) =>  <FontAwesome name="user" color={color} size={iconSize}/> 
      }}  
      />

      <Tab.Screen
        name="Upload"
        component={PrivateRoute(Home)}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({color})  => <MaterialCommunityIcons name="upload" color={color} size={iconSize + 5} />
        }}  
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="duck" color={color} size={iconSize + 10} />
        }}  
      />

      <Tab.Screen
        name="Like"
        component={PrivateRoute(Home)}
        options={{
          tabBarLabel: 'Like',
          tabBarIcon: ({color}) => <AntDesign name="heart" color={color} size={iconSize} />
        }}  
      />

      <Tab.Screen
        name="Share"
        component={PrivateRoute(Home)}
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({color}) => <Fontisto name="share-a" color={color} size={iconSize} />
        }}  
      />

  </Tab.Navigator>
)
