import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#faf601"/>
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
    }
})