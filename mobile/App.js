import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import DeslikeIcon from './src/assets/deslike.png';
import LikeIcon from './src/assets/like.png';
import api from './src/services/api'
import Video from 'react-native-video';


export default class Exemple extends Component {


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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWFjODNlMTM1ZGFhMjA5OGI4NjNmMiIsImlhdCI6MTYyMjIzNTA3NSwiZXhwIjoxNjI0ODI3MDc1fQ._YxR62UuFBB8fJoDC_e5qUVuqjeJspSuaj3TtqLR4E8"
        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        } 

        const response = await api.get(`/list`,authorizaton)
        this.setState({meme: response.data})
    }catch(erro){
        console.log("Erro ao carregar memes")
        console.log(erro.response.data.error)
    }
  }


  render(){
      const DeslikeIconUri = Image.resolveAssetSource(DeslikeIcon).uri
      const LikeIconUri = Image.resolveAssetSource(LikeIcon).uri
      return !this.state.isloading ? (
      <SafeAreaView style={styles.container}>
        <Swiper
            cards={this.state.meme}
            renderCard={(card) => {

              const playNow = this.state.meme.indexOf(card) === this.state.currentCard ? false : true
              
              console.log(`IOF: ${this.state.meme.indexOf(card)} | CC: ${this.state.currentCard} | PNW: ${playNow}`)

                return (
                    <View style={styles.card}>
                          {
                            card.mimetype.includes('video') ?
                            <Video repeat={true} style={styles.memeContent} paused={playNow} controls={true} source={{
                              uri: card.imageUrl
                            }}/>
                        
                            :

                            <Image style={styles.memeContent} source={{
                              uri: card.imageUrl
                            }}/>

                          }

                      <View style={styles.cardBottom}>

                        <Image style={styles.deslikeIcon} source={{
                          uri: DeslikeIconUri
                        }}/>

                        <View style={styles.cardBottomMiddle}>
                          <Text style={styles.memeDescriptionTxt}>{card.description}</Text>
                          <Text style={styles.publisherNameTxt}>@{card.publisherName}</Text>
                        </View>

                        <Image style={styles.likeIcon} source={{
                          uri: LikeIconUri
                        }}/>

                      </View>
                    </View>
                )
            }}
            verticalSwipe={false}
            onSwiped={(cardIndex) => {console.log(cardIndex); this.setState({currentCard: cardIndex + 1})}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#1f2125'}
            stackSize={3}
            cardHorizontalMargin={1}>

          <TouchableOpacity style={styles.uploadButton} title="TESTE">
            <Text style={styles.uploadButtonTxt}>Upload Meme</Text>
          </TouchableOpacity>

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
    maxHeight: '85%',
    marginTop: 50,
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
    // backgroundColor: '#FFC000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    height: '20%',
    alignSelf: 'flex-end'
  },
  likeIcon: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  deslikeIcon:{
    width: 50,
    height: 50,
    transform: [{ rotate: '180deg' }],
    marginLeft: 10
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  memeContent: {
    maxWidth: 380,
    width: '100%',
    height: 400
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
  uploadButton:{
    height: 50,
    width: 110,
    margin: 10,
    borderColor: '#006eff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 0
  },
  uploadButtonTxt:{
    color: '#fff'
  }
});