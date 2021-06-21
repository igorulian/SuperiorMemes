import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,Alert,ActivityIndicator} from 'react-native';
import {styles} from './styles'

export default class Register extends Component {

    state = {
        isLoading: false
    }

    checkFields = async () => {
        const {username, email, pass1, pass2} = this.state

        if(!email || !username || !pass1 || !pass2)
            return Alert.alert("Fill all the fields")

        if(pass1 !== pass2)
            return Alert.alert("Passwords do not match")

        this.setState({isLoading: true})
        await this.props.register({email,password: pass1, username})
        this.setState({isLoading: false})
    }   

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}> 
                    <Text style={styles.title}> Register </Text>

                    <View style={styles.form}>
                        <Text style={styles.inputtxt}> Username </Text>
                        <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text => this.setState({ username: text })} keyboardType="default"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Email </Text>
                        <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={text => this.setState({ email: text })} keyboardType="email-address"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Password </Text>
                        <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text => this.setState({ pass1: text })} keyboardType="default"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Confirm password </Text>
                        <TextInput style={styles.input} placeholder="Confirme sua senha" onChangeText={text => this.setState({ pass2: text })} keyboardType="default"  placeholderTextColor="#FFF"/>
                    </View>

                    
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.checkFields()}>
                        <Text style={styles.buttonText}> {this.state.isLoading ? <ActivityIndicator size="small" color="#000"/> : 'Register' } </Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={() => {this.props.goToLogin()}}>
                        <Text style={styles.registerText}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

