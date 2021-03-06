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
      backgroundColor: "#1d1d1d",
      width: '100%',
      maxHeight: '100%',
      marginTop: 20,
      borderColor: '#000',
      borderWidth: 0.5,
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 1 },
      // shadowOpacity: 1,
      // shadowRadius: 2,  
      // elevation: 5,
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
      bottom: 0,
      marginBottom: 10
    },
    likeIcon: {
      width: 30,
      height: 30,
      marginRight: 15,
      bottom: 0,
    },
    deslikeIcon:{
      width: 30,
      height: 30,
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
      height: '100%',
      width: '60%',
      alignItems: 'center'
    },
    memeDescriptionTxt:{
      color: '#f5f5f5'
    },
    dislikestxt:{
      color: '#fff',
      marginLeft: 23,
      marginTop: 10
    },
    likestxt:{
      color: '#fff',
      marginLeft: 10,
      marginTop: 10
    }
  });


export default styles