import React, {Component} from 'react'
import Login from './login'
import Register from './register'
import {Alert} from 'react-native'

export default class Authenticate extends Component {

    state = {
        login: true
    }

    login = async (data) => {
        Alert.alert(`${data.email} | ${data.password}`)
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
