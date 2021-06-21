import { useState } from "react/cjs/react.production.min";
import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './style'
import Title from '../../components/title'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Title text="Profile"/>

                <View style={styles.profileContent}>

                    <View style={styles.profilePicture}>
                        <MaterialCommunityIcons name="duck" color={'#faf601'} size={50} />
                    </View>
                    
                    <Text style={styles.profileUsername}> @teste </Text> 

                    <Text style={styles.text}> ____________________________ </Text>

                    <View style={styles.dataContainer}>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="thumb-up" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> 300 </Text>
                        </View>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="comment" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> 20 </Text>
                        </View>

                        <View style={styles.dataContent}>
                            <MaterialCommunityIcons name="thumb-down" color={'#faf601'} size={30} />
                            <Text style={styles.textData}> 400 </Text>
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