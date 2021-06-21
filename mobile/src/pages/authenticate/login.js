import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {styles} from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        isLoading: false
    }

    checkFields = async () => {
        const {email, password} = this.state

        if(!email || !password)
            return Alert.alert("Fill all the fields")

        this.setState({isLoading: true})
        await this.props.login({email,password})
        this.setState({isLoading: false})
    }   

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.content}> 
                    <Text style={styles.title}> Login </Text>

                    <View style={styles.form}>
                        <Text style={styles.inputtxt}> Email </Text>
                        <TextInput style={styles.input} onChangeText={text => this.setState({ email: text })} placeholder="Digite seu email" keyboardType="email-address"  placeholderTextColor="#FFF"/>
                        
                        <Text style={styles.inputtxt}> Password </Text>
                        <TextInput style={styles.input} onChangeText={text => this.setState({ password: text })} placeholder="Digite sua senha" keyboardType="default"  placeholderTextColor="#FFF"/>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={() => {this.checkFields()} }>
                        <Text style={styles.buttonText}> {this.state.isLoading ? <ActivityIndicator size="small" color="#000"/> : 'Login'} </Text>
                    </TouchableOpacity>

                    <Text style={styles.registerText}> Or login with </Text>

                    <View style={styles.loginWithContainer}>
                        <TouchableOpacity style={styles.loginWithContent}>
                            <FontAwesome name="facebook-official" color={'#faf601'} size={20}/> 
                            <Text style={styles.loginWithContentText}> Login with Facebook </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginWithContent}>
                            <FontAwesome name="google" color={'#faf601'} size={20}/> 
                            <Text style={styles.loginWithContentText}> Login with Google </Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => {this.props.goToRegister()}}>
                        <Text style={styles.registerText}>  Register with e-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

