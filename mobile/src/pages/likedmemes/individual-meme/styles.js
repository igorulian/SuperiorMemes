import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5
    },
    card: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#1d1d1d",
        width: '100%',
        maxHeight: '100%',
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 90,
        marginTop: 70
      },
      cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        alignSelf: 'flex-end',
        bottom: 0,
        marginBottom: 10
      },
      likeIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        bottom: 0,
      },
      deslikeIcon:{
        width: 30,
        height: 30,
        marginLeft: 15,
      },
      text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
      },
      memeContent: {
        flex: 1,
        width: 380,
        height: 480,
        marginTop: 5,
        marginBottom: 5,
        top: 0,
      },
      publisherNameTxt:{
        color: '#cfcfcf',
        marginTop: 5,
        bottom: 0,
        position: 'absolute',
        marginBottom: 5
      },
      dislikestxt:{
        color: '#fff',
        marginLeft: 23,
        marginTop: 10
      },
      likestxt:{
        color: '#fff',
        marginLeft: 10,
        marginTop: 10
      },
      cardBottomMiddle:{
        padding: 5,
        height: '100%',
        width: '60%',
        alignItems: 'center'
      },
      memeDescriptionTxt:{
        color: '#f5f5f5'
      },
})