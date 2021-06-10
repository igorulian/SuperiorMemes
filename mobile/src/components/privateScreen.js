import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import Loading from './loading'
import Authenticate from '../pages/authenticate/authenticate'
import Home from '../pages/home/home'
import LikedMemes from '../pages/likedmemes/likedmemes'

export default class PrivateScreen extends Component {
    state = { 
        isLoading: true,
        authenticated: false,
        to: this.props.to
    }

    componentDidMount(){
        this.checkAuthenticate()
    }

    checkAuthenticate = async () => {
        const token = await AsyncStorage.getItem('token')

        if(token) this.setState({authenticated: true})
       
        this.setState({isLoading: false})
    }

    render() {
        const Screen = this.props.route.params.to
        const isLoading = this.state.isLoading
        const isAuthenticated = this.state.authenticated

        if(isLoading)
            return <Loading/>

        if(isAuthenticated)
            return <Screen/>
        else
            return <Authenticate/>
        
    }
}