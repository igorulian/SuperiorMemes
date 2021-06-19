import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {styles} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

export default function IndividualMeme(props){

    const meme = props.route.params.meme

    return (
        <View style={styles.container}>
            <BackButton/>
            {Meme(meme)}
        </View>
    )
}

function BackButton(){
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.backButton} onPress={ () => {navigation.goBack()}}>
            <MaterialCommunityIcons name="chevron-left" color={'#faf601'} size={45} />
        </TouchableOpacity>
    )
}

const Meme = (card) =>{ 



    return(
    
    <View style={styles.card}>

        { card.mimetype.includes('video') ?
        <Video repeat={true} style={styles.memeContent} paused={false} controls={true} source={{ uri: card.imageUrl }}/>
        :
        <Image style={styles.memeContent} source={{ uri: card.imageUrl }}/>
        }

        <View style={styles.cardBottom}>

        <View>
            <View style={styles.deslikeIcon}>
                <MaterialCommunityIcons name="thumb-down-outline" color={'#faf601'} size={30} />
            </View>
            <Text style={styles.dislikestxt}> {card.dislikes} </Text>
        </View>


        <View style={styles.cardBottomMiddle}>
            <Text style={styles.memeDescriptionTxt}>{card.description}</Text>
            <Text style={styles.publisherNameTxt}>@{card.publisherName}</Text>
        </View>

        <View>
            <View style={styles.likeIcon}>
                <MaterialCommunityIcons name="thumb-up" color={'#faf601'} size={30} />
            </View>
            <Text style={styles.likestxt}> {card.likes} </Text>
        </View>


        </View>
    </View>
)}