import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, Text, View, SafeAreaView, Image  } from 'react-native'
import api from '../../services/api'
import Video from 'react-native-video';
import GoogleAds from '../../components/google-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/loading'
import NoMemesAvailable from './no-memes-available';
import Title from '../../components/title'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles'

export default class Home extends Component {


  state = {
    meme: [],
    isloading: true,
    currentCard: 0
  }


  async componentDidMount() {
    await this.loadRequests()
    this.setState({isloading: false})
  }


  loadRequests = async() => {
      try{
          const token = await AsyncStorage.getItem('token')

          if(!token){
              await this.guestLoadRequest()
              return
          }

          const authorizaton = {
              headers: {
              'Authorization': `Bearer ${token}` 
              }
          }

          const response = await api.get(`/list`,authorizaton)
          
          this.setState({meme: response.data})


      }catch{
          console.log('Error loading memes')
      }
  }


  guestLoadRequest = async () => {
    try{
      var ratedMemes = []

      const ratedMemesLocal = await AsyncStorage.getItem('guestRatedMemes')

      if(ratedMemesLocal)
          ratedMemes = JSON.parse(ratedMemesLocal)
      
      const req = {
          ratedMemes
      }
      
      const response = await api.post(`/guest/list`,req, {})
      this.setState({meme: response.data})

    }catch{
      console.log('Error loading guest memes')
    }
  }


  rateMeme = async (rate) => {
    try{
      const meme = this.state.meme[this.state.currentCard]
      this.setState({currentCard: this.state.currentCard + 1})

      const memeid = meme._id

      const token = await AsyncStorage.getItem('token')
      const authorizaton = {
          headers: {
          'Authorization': `Bearer ${token}` 
          }
      }

      if(!token){
          await this.rateMemeGuestMode(memeid,rate,meme)
          return
      }

      await api.post(`/rate/${memeid}/${rate}`,{},authorizaton)

      if(this.state.meme.indexOf(meme) <= 0)
          this.loadRequests()

    }catch{
        console.log('Error rating meme')
    }
        
  }

  rateMemeGuestMode = async (memeid,rate,meme) => {
    var newReateMemesLocal = []
    const rateMemesLocal = JSON.parse(await AsyncStorage.getItem('guestRatedMemes'))
    if(rateMemesLocal){
        newReateMemesLocal = rateMemesLocal
    }

    console.log({memeid,rate})
    newReateMemesLocal.push({memeid,rate})
    await AsyncStorage.setItem('guestRatedMemes',JSON.stringify(newReateMemesLocal))

    
    if(this.state.meme.indexOf(meme) <= 0)
        this.loadRequests()
  }



  render(){

      if(this.state.isloading)
        return <Loading/>

      if(this.state.meme.length <= 0)
        return <NoMemesAvailable/>


      return(
        <SafeAreaView style={styles.container}>
          {/* <GoogleAds/> */}
          <Title text="Quack Memes"/>

            <Swiper
              cards={this.state.meme}
              renderCard={(card) => {
                
                  const paused = this.state.meme.indexOf(card) != this.state.currentCard

                  if(!card) return

                  return (
                    <View style={styles.card}>

                      { card.mimetype.includes('video') ?
                        <Video repeat={true} style={styles.memeContent} paused={paused} controls={true} source={{ uri: card.imageUrl }}/>
                        :
                        <Image style={styles.memeContent} source={{ uri: card.imageUrl }}/>
                      }

                      <View style={styles.cardBottom}>

                        <View>
                          <MaterialCommunityIcons style={styles.deslikeIcon} name="thumb-down-outline" color={'#faf601'} size={30} />
                          <Text style={styles.dislikestxt}> {card.dislikes} </Text>
                        </View>


                        <View style={styles.cardBottomMiddle}>
                          <Text style={styles.memeDescriptionTxt}>{card.description}</Text>
                          <Text style={styles.publisherNameTxt}>@{card.publisherName}</Text>
                        </View>

                        <View>
                          <MaterialCommunityIcons style={styles.likeIcon} name="thumb-up" color={'#faf601'} size={30} />
                          <Text style={styles.likestxt}> {card.likes} </Text>
                        </View>


                      </View>
                    </View>
                  )
                }}
                verticalSwipe={false}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                backgroundColor={'#121212'}
                stackSize={10}
                cardHorizontalMargin={0}
                onSwipedRight={() => {this.rateMeme(1)}}
                onSwipedLeft={() => {this.rateMeme(0)}}
          />

        </SafeAreaView>
      )
  }
}
