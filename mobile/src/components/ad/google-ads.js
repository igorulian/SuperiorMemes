import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'

export default class GoogleAds extends Component {

    render(){
        return(
            <SafeAreaView style={styles.boxstyle}>
                <Text> GOOGLE ADS</Text>
            </SafeAreaView> 
        )
    }
}

const styles =  StyleSheet.create({
    boxstyle: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 60,    
        backgroundColor: '#eb3434',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})