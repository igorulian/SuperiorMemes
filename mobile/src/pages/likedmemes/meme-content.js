import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import {styles} from './meme-style'
import { useNavigation } from '@react-navigation/native';


export default function MemeContent(props){

    const meme = props.item
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.memecontainer} onPress={() => {navigation.navigate('Like', {screen: 'MemeIndividual', params: { meme }})}}>
            <View style={styles.memecontent}>
                <Image style={styles.memeImage} source={{ uri: meme.imageUrl }}/>

                <View style={styles.memefooter}>
                    <Text style={styles.memeDescription}> {meme.description} </Text>
                    <Text style={styles.memePublisher}> {meme.publisherName} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    
}
