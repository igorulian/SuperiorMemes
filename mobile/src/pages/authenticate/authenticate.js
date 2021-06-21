import React, {Component} from 'react'
import Login from './login'
import Register from './register'
import {Alert} from 'react-native'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Authenticate extends Component {

    state = {
        login: true
    }

    login = async (data) => {
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
                Alert.alert('Error', erro.response.data.error)
            })

        }catch{
            Alert.alert('Error', 'Erro in login')
        }   
    }

    register = async (data) => {
        try{
            const localRatedMemes = JSON.parse(await AsyncStorage.getItem('guestRatedMemes'))

            const {email, password, username:user} = data

            const req = {
                user,
                email,
                password,
                localRatedMemes
            }

            console.log(req)

            await api.post(`/register`, req).then(async response => {
                const token = response.data.token
                await AsyncStorage.setItem('guestRatedMemes', '')
                await AsyncStorage.setItem("token", token)

            }).catch(erro => {
                Alert.alert('Error', erro.response.data.error)
            })

        }catch{
            Alert.alert('Error', 'Error ir register', 'try again later')
        }

    }


    render() {
        if(this.state.login)
            return <Login login={data => this.login(data)} goToRegister={ () => {this.setState({login: false})} }/>
        else
            return <Register register={data => this.register(data)} goToLogin={ () => {this.setState({login: true})} }/>
    }
}
