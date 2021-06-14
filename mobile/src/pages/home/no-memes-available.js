import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

const NoMemesAvailable = () => (
    <View style={styles.container}>
        <Text style={styles.text}> No memes available </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1f2125',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#faf601'
    }
})


export default NoMemesAvailable