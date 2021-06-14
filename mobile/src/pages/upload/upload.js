import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {styles} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Upload extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Upload 
                </Text>

                <View style={styles.uploadContainer}>
                    <TouchableOpacity style={styles.uploadContent}>
                        <MaterialCommunityIcons name="upload" color={'#faf016'} size={100} />
                    </TouchableOpacity>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionTxt}> Description </Text>
                        <TextInput style={styles.descriptionInput} textCo/>
                    </View>


                    <TouchableOpacity style={styles.uploadButton}>
                        <Text style={styles.uploadButtonText}>  Publish Meme </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
