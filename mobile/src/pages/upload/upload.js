import React, { Component } from 'react';
import { View, Text } from "react-native";
import {styles} from './styles'

export default class Upload extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Upload 
                </Text>
            </View>
        )
    }
}
