import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Loading extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Loading... </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#faf601'
    }
})