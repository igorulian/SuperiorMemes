import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Alert, SafeAreaView, StyleSheet } from 'react-native';
import {styles} from './styles'
import MemeContent from './meme/meme-content'
import Loading from '../../components/loading';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from '../../components/title'

export default class LikedMemes extends Component {

    state = {
        memes: [],
        isLoading: true,
    }

    async componentDidMount(){
        await this.loadMemes()
        this.setState({isLoading: false})
    }


    loadMemes = async () => {
        try{
            const token = await AsyncStorage.getItem('token')
            
            if(!token)
                return Alert.alert('Error', 'Error in get token')

            const authorizaton = {
                headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

            await api.get(`/list/liked`,authorizaton).then(response => {

                this.setState({memes: response.data})

            }).catch(erro => {
                Alert.alert("Error", `${erro.response.data.error}`)
            })

        }catch(err){
            Alert.alert('Error', 'Error in load liked memes' )
        }
    }

    render() {
        if(this.state.isLoading)
            return <Loading/>

        return (
            <SafeAreaView style={styles.container}>
                
                <Title text="Liked Memes"/>

                <FlatList
                    style={StyleSheet.create({marginTop: 50})}
                    data={this.state.memes}
                    keyExtractor={item => item._id}
                    numColumns={2}
                    renderItem={({ item }) => { return ( <MemeContent item={item}/> )}}
                />
            </SafeAreaView>
        )
    }
}
