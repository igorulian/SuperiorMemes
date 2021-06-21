import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './src/routes'
import { StatusBar } from 'react-native'

export default App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#121212' barStyle='light-content'/>
      <TabRoutes/>
    </NavigationContainer>

  )
}

