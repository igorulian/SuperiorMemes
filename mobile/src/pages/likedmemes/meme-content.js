import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import {styles} from './meme-style'
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';


export default function MemeContent(props){

    const meme = props.item
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.memecontainer} onPress={() => {navigation.navigate('Like', {screen: 'MemeIndividual', params: { meme }})}}>
            <View style={styles.memecontent}>
                {meme.mimetype.includes('video') ?
                <Video style={styles.memeImage} paused={true} source={{ uri: meme.imageUrl }}/> :
                <Image style={styles.memeImage} source={{ uri: meme.imageUrl }}/>
                }

                <View style={styles.memefooter}>
                    <Text style={styles.memeDescription}> {meme.description} </Text>
                    <Text style={styles.memePublisher}> {meme.publisherName} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    
}
