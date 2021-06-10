import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import {styles} from './meme-style'

export default class MemeContent extends Component {

    render() {
        const meme = this.props.item
        return (
            <TouchableOpacity style={styles.memecontainer} onPress={() => {Alert.alert("Go to meme", `id: ${meme._id}`)}}>
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
}
