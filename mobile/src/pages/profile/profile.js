import { useState } from "react/cjs/react.production.min";
import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Alert,FlatList} from 'react-native'
import {styles} from './style'
import Title from '../../components/title'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from '../../components/loading' 

export default class Profile extends Component{

    state = {
        isLoading: true,
        data: {},
        dataComponents: []
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
            this.setDataComponents(response.data)
            console.log(response.data)
        }).catch(error => {
            Alert.alert('Error', error.response.data.error)
        })
    }

    setDataComponents = (data) => {
        const iconsize = 10
        var approval = 0 
        if(data.totalmemes > 0)
            approval = (data.totallikes / data.totalmemes ) * 100  

        this.setState({dataComponents: [
            {name: 'Likes', value: data.totallikes, icon: 'thumb-up-outline'},
            {name: 'Dislikes', value: data.totaldislikes, icon: 'thumb-down-outline'},
            {name: 'Comments', value: data.totalcomments, icon: 'comment-outline'},
            {name: 'Memes', value: data.totalmemes, icon: 'image'},
            {name: 'Approval', value: `${approval}%`, icon: 'star-outline'},
            {name: 'Lorem Ipsun', value: 100, icon: 'star-outline'}
        ]})
    }


    render(){
        const DataContent = (data) => (
            <View style={styles.dataContainer}>
                <MaterialCommunityIcons name={data.icon} color={'#faf601'} size={50} />
                <Text style={styles.dataText}> {data.value} </Text>
                <Text style={styles.dataText}> {data.name} </Text>
            </View>
        )

        if(this.state.isLoading)
            return <Loading/>

        return(

            <View style={styles.container}>
                <Title text="Profile"/>

                <View style={styles.profileContent}>

                    <View style={styles.profilePicture}>
                        <MaterialCommunityIcons name="duck" color={'#faf601'} size={50} />
                    </View>
                    
                    <Text style={styles.profileUsername}> {`@${this.state.data.username}`} </Text> 

                    {/* <Text style={styles.text}> ____________________________ </Text> */}

                    
                    <FlatList
                        style={styles.flatlist}
                        data={this.state.dataComponents}
                        keyExtractor={item => item.name}
                        numColumns={2}
                        renderItem={({ item }) => { return ( DataContent(item) )}}
                    />

                </View>

            </View>
        )
    }

}