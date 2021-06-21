import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    profileContent:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 70
    },
    profilePicture:{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileUsername:{
        marginTop: 20,
        color: '#fff'
    },
    dataContainer:{
        width: 120,
        height: 120,
        backgroundColor: '#1d1d1d',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 1,
        marginRight: 20,
        marginLeft: 20
    },
    dataContent:{
        width: 100,
        height: 100,     
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#575757',
        marginBottom: 10,
    },
    flatlist:{
        marginBottom: 60
    },
    dataText:{
        color: '#fff',
        margin: 2
    }
})