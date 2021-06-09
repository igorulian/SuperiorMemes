import React, { Component } from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    card: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#282a2e",
      // backgroundColor: "#00ff22",
      width: '100%',
      maxHeight: '100%',
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    cardBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
      alignSelf: 'flex-end',
      // backgroundColor: '#cc3534',
      bottom: 0,
      position: 'absolute',
      marginBottom: 10
    },
    likeIcon: {
      width: 40,
      height: 40,
      marginRight: 15,
      bottom: 0,
    },
    deslikeIcon:{
      width: 40,
      height: 40,
      transform: [{ rotate: '180deg' }],
      marginLeft: 15,
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    },
    memeContent: {
      flex: 1,
      width: 380,
      height: 480,
      marginTop: 5,
      marginBottom: 5,
      top: 0,
      position: 'absolute'
    },
    publisherNameTxt:{
      color: '#cfcfcf',
      marginTop: 5,
      bottom: 0,
      position: 'absolute',
      marginBottom: 5
    },
    ad: {
      width: '100%',
      height: 80,
      backgroundColor: '#eb3434'
    },
    cardBottomMiddle:{
      padding: 5,
      // backgroundColor: '#00FFC0',
      height: '100%',
      width: '60%',
      alignItems: 'center'
    },
    memeDescriptionTxt:{
      color: '#f5f5f5'
    },
    dislikestxt:{
      color: '#fff',
      marginLeft: 28,
      marginTop: 10
    },
    likestxt:{
      color: '#fff',
      marginLeft: 15,
      marginTop: 10
    }
  });


export default styles