import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {styles} from './styles'

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Login </Text>
                <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address"  placeholderTextColor="#FFF"/>
                <TextInput style={styles.input} placeholder="Digite sua senha" keyboardType="default"  placeholderTextColor="#FFF"/>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.registerText}> Register now</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

