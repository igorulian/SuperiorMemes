import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {styles} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function IndividualMeme(props){

    console.log(props)

    return (
        <View style={styles.container}>
            <BackButton/>
            <Text> INIDIVIDUAL MEME </Text>
        </View>
    )
}

function BackButton(){
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.backButton} onPress={ () => {navigation.goBack()}}>
            <MaterialCommunityIcons name="chevron-left" color={'#faf601'} size={45} />
        </TouchableOpacity>
    )
}