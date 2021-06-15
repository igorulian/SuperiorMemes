import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'

export default class Title extends Component {

    render(){
        return(
            <SafeAreaView style={styles.boxstyle}>
                <Text style={styles.text}> {this.props.text}</Text>
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
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#faf601',
        fontSize: 30,
        textShadowColor: '#faf601',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 15
    }
})