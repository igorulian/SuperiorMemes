import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home/home'
import Authenticate from './pages/authenticate/authenticate'
import PrivateScreen from './components/privateScreen'
import LikedMemes from './pages/likedmemes/likedmemes'
import Upload from './pages/upload/upload'
import IndividualMeme from './pages/likedmemes/individual-meme/meme'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const iconSize = 30


export const TabRoutes = () => (
  <Tab.Navigator keyboardHidesTabBar={true} initialRouteName="Home" tabBarOptions={{style: {borderTopWidth: 0, position: 'absolute'},activeTintColor: '#faf601', inactiveTintColor: '#faf60166' , showLabel: false ,tabStyle:{backgroundColor: '#282a2e'}}}>
      <Tab.Screen
        name="Profile"
        component={PrivateScreen}
        initialParams={{to: LikedMemes}}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) =>  <FontAwesome name="user" color={color} size={iconSize}/> 
        }}  
      />

      <Tab.Screen
        name="Upload"
        component={PrivateScreen}
        initialParams={{to: Upload}}
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
        component={likedMemesRoute}
        options={{
          tabBarLabel: 'Like',
          tabBarIcon: ({color}) => <AntDesign name="heart" color={color} size={iconSize} />
        }}  
      />

      <Tab.Screen
        name="Share"
        component={PrivateScreen}
        initialParams={{to: Upload}}
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({color}) => <Fontisto name="share-a" color={color} size={iconSize} />
        }}  
      />

  </Tab.Navigator>
)


const likedMemesRoute = () => (
  <Stack.Navigator initialRouteName="MemeList" screenOptions={{headerShown: false}}>        
    <Stack.Screen
      name="MemeIndividual"
      component={IndividualMeme}  
    />

    <Stack.Screen 
      name="MemeList" 
      component={PrivateScreen}
      initialParams={{to: LikedMemes}} 
      />
  </Stack.Navigator>
)