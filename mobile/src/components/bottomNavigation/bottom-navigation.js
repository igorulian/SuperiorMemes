import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import HeartIcon from '../../assets/heart.png';
import ShareIcon from '../../assets/share.png';
import UploadIcon from '../../assets/upload.png';
import DuckIcon from '../../assets/duck.png';
import ProfileIcon from '../../assets/profile.png';


export default class BottomNavigation extends Component {

    render(){
      const HeartIconUri = Image.resolveAssetSource(HeartIcon).uri
      const ShareIconUri = Image.resolveAssetSource(ShareIcon).uri
      const UploadIconUri = Image.resolveAssetSource(UploadIcon).uri
      const DuckIconUri = Image.resolveAssetSource(DuckIcon).uri
      const ProfileIconUri = Image.resolveAssetSource(ProfileIcon).uri

        return(
            <SafeAreaView style={styles.boxstyle}>
                <TouchableOpacity style={styles.button} title="TESTE">
                    <Image style={styles.icons} source={{ uri: UploadIconUri }}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} title="TESTE">
                    <Image style={styles.icons} source={{ uri: ProfileIconUri }}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.homeButton} title="TESTE">
                    <Image style={styles.icons} source={{ uri: DuckIconUri }}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} title="TESTE">
                    <Image style={styles.icons} source={{ uri: HeartIconUri }}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} title="TESTE">
                    <Image style={styles.icons} source={{ uri: ShareIconUri }}/>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles =  StyleSheet.create({
    boxstyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,    
        // backgroundColor: '#00FFC0',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,
        backgroundColor: "#282a2e",
        
    },
    homeButton:{
        height: 55,
        width: 55,
        margin: 10,
        marginBottom: 40,
        borderColor: '#faf601',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#282a2e",
    },
    button:{
        height: 50,
        width: 55,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    icons:{
        width: 30,
        height: 30,
        opacity: 0.3
    },
})