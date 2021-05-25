import React,{ Component } from 'react';
import Swiper from 'react-native-deck-swiper'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Text> olá </Text>

                <Swiper
                    cards={['1', '2', '3', '4', '5', '6', '7']}
                    renderCard={(card) => {
                        return (
                            <View style={styles.containerMeme}>
                                <View style={styles.quadrado}>
                                    <View style={styles.meme}>
                                        <Text> 🐘 </Text>
                                    </View>

                                    <Text styles={styles.txtuser}> @user </Text>
                                </View>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedAll={() => {console.log('onSwipedAll')}}
                    cardIndex={0}
                    backgroundColor={'#333'}
                    stackSize= {3}/>
                    

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#393939',
      flex: 1,
      textAlign: 'center',
      color: '#45ff'
    },
    containerMeme: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: '20%'
    },
    quadrado: {
      backgroundColor: '#fff',
      width: '100%',
      height: 430,
      alignItems: 'center',
    },
    meme: {
      backgroundColor: '#45ff',
      width: 345,
      height: 345,
      margin: 4,
    },
    txt: {
      fontSize: 50,
      color: '#fff'
    },
    txtuser: {
        color: '#999',
        fontSize: 100,
        paddingTop: 20
    }
  });