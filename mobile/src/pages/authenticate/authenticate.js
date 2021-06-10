import React, {Component} from 'react'
import Login from './login'
import Register from './register'
import {Alert} from 'react-native'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cos } from 'react-native-reanimated'

export default class Authenticate extends Component {

    state = {
        login: true
    }

    login = async (data) => {
        console.log(data)
        try{
            const {email,password} = data

            const req = {
                email,
                password
            }

            await api.post(`/login`, req).then(async response => {
                const token = response.data.token

                await AsyncStorage.setItem('token', token)

            }).catch(erro => {
                Alert.alert("Error", `${erro.response.data.error}`)
            })

        }catch(err){
            Alert.alert('Error', 'Error in login')
        }   
    }

    register = (data) => {
        
    }


    render() {
        if(this.state.login)
            return <Login login={(data) => this.login(data)} goToRegister={ () => {this.setState({login: false})} }/>
        else
            return <Register goToLogin={ () => {this.setState({login: true})} }/>
    }
}
