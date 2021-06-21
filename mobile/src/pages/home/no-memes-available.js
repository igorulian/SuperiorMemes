import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NoMemesAvailable = () => (
    <View style={styles.container}>
        <MaterialCommunityIcons name="duck" color={'#faf601'} size={100} />
        <Text style={styles.text}> No memes available </Text>
        <Text style={styles.text}>  You've seen all available memes so far.  </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#faf601'
    },
    content: {
        marginBottom: 30
    }
})


export default NoMemesAvailable