import { useState } from "react/cjs/react.production.min";
import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {styles} from './style'
import Title from '../../components/title'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Profile extends Component{

    state = {
        isLoading: true,
        data: {}
    }

    async componentDidMount(){
        await this.loadRequests()
        this.setState({isLoading: false})
    }


    loadRequests = async () => {
        const token = await AsyncStorage.getItem('token')

        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        }

        await api.get('/profile', authorizaton).then(response => {
            this.setState({data: response.data})
            console.log(response.data)
        }).catch(error => {
            Alert.alert('Error', error.response.data.error)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Title text="Profile"/>

                <View style={styles.profileContent}>

                    <View style={styles.profilePicture}>
                        <MaterialCommunityIcons name="duck" color={'#faf601'} size={50} />
                    </View>
                    
                    <Text style={styles.profileUsername}> {`@${this.state.data.username}`} </Text> 

                    <Text style={styles.text}> ____________________________ </Text>

                    <View style={styles.dataContainer}>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="thumb-up" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> {this.state.data.totallikes} </Text>
                        </View>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="comment" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> {this.state.data.totalcomments} </Text>
                        </View>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="thumb-down" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> {this.state.data.totaldislikes} </Text>
                        </View>

                    </View>
                    
                    <Text style={styles.text2}> ____________________________ </Text>

                    <View style={styles.profileButtonsContainer}>
                        <TouchableOpacity style={styles.profileButton}> 
                            <Text style={styles.profileButtonText}> My memes </Text> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.profileButton}> 
                            <Text style={styles.profileButtonText}> Lorem ipsum </Text> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.profileButton}> 
                            <Text style={styles.profileButtonText}> Settings </Text> 
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }

}