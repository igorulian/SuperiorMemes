import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import DeslikeIcon from '../../assets/deslike.png';
import LikeIcon from '../../assets/like.png';
import api from '../../services/api'
import Video from 'react-native-video';
import BottomNavigation from '../../components/bottomNavigation/bottom-navigation'
import GoogleAds from '../../components/ad/google-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      const DeslikeIconUri = Image.resolveAssetSource(DeslikeIcon).uri
      const LikeIconUri = Image.resolveAssetSource(LikeIcon).uri

      return !this.state.isloading ? (
      <SafeAreaView style={styles.container}>
        
        <Swiper
            cards={this.state.meme}
            renderCard={(card) => {

              // const pause = this.state.meme.indexOf(card) == this.state.currentCard ? false : true
              // console.log(`IOF: ${this.state.meme.indexOf(card)} | CC: ${this.state.currentCard} | paused: ${pause} | mimetype: ${card.mimetype}`)

                return (
                    <View style={styles.card}>

                      { card.mimetype.includes('video') ?
                        <Video repeat={true} style={styles.memeContent} paused={true} controls={true} source={{ uri: card.imageUrl }}/>
                        :
                        <Image style={styles.memeContent} source={{ uri: card.imageUrl }}/>
                      }

                      <View style={styles.cardBottom}>

                        <View>
                          <Image style={styles.deslikeIcon} source={{ uri: DeslikeIconUri }}/>
                          <Text style={styles.dislikestxt}> {card.dislikes} </Text>
                        </View>


                        <View style={styles.cardBottomMiddle}>
                          <Text style={styles.memeDescriptionTxt}>{card.description}</Text>
                          <Text style={styles.publisherNameTxt}>@{card.publisherName}</Text>
                        </View>

                        <View>
                          <Image style={styles.likeIcon} source={{ uri: LikeIconUri }}/>
                          <Text style={styles.likestxt}> {card.likes} </Text>
                        </View>


                      </View>
                    </View>
                )
            }}
            verticalSwipe={false}
            // onSwiped={(cardIndex) => {console.log(cardIndex); this.setState({currentCard: cardIndex + 1}); this.rateMeme(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#1f2125'}
            stackSize={3}
            cardHorizontalMargin={1}
            onSwipedRight={() => {this.rateMeme(1)}}
            onSwipedLeft={() => {this.rateMeme(0)}}
            >

          {/* <BottomNavigation page='home'/> */}
          <GoogleAds/>

          </Swiper>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.container}>
        <Text> CARREGANDO </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#282a2e",
    width: '100%',
    maxHeight: '86%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    alignSelf: 'flex-end',
    // backgroundColor: '#eb3434',
  },
  likeIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    bottom: 0,
  },
  deslikeIcon:{
    width: 40,
    height: 40,
    transform: [{ rotate: '180deg' }],
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  memeContent: {
    width: 380,
    height: 430,
  },
  publisherNameTxt:{
    color: '#cfcfcf',
    marginTop: 5,
    bottom: 0,
    position: 'absolute',
    marginBottom: 5
  },
  ad: {
    width: '100%',
    height: 80,
    backgroundColor: '#eb3434'
  },
  cardBottomMiddle:{
    padding: 5,
    // backgroundColor: '#00FFC0',
    height: '100%',
    width: '60%',
    alignItems: 'center'
  },
  memeDescriptionTxt:{
    color: '#f5f5f5'
  },
  dislikestxt:{
    color: '#fff',
    marginLeft: 28,
    marginTop: 10
  },
  likestxt:{
    color: '#fff',
    marginLeft: 15,
    marginTop: 10
  }
});