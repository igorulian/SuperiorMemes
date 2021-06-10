import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {styles} from './styles'

export default class Register extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}> 
                    <Text style={styles.title}> Register </Text>

                    <View style={styles.form}>
                        <Text style={styles.inputtxt}> Username </Text>
                        <TextInput style={styles.input} placeholder="Digite seu usuário" keyboardType="default"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Email </Text>
                        <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Password </Text>
                        <TextInput style={styles.input} placeholder="Digite sua senha" keyboardType="default"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Confirm password </Text>
                        <TextInput style={styles.input} placeholder="Confirme sua senha" keyboardType="default"  placeholderTextColor="#FFF"/>
                    </View>

                    
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}> Register </Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={() => {this.props.goToLogin()}}>
                        <Text style={styles.registerText}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

