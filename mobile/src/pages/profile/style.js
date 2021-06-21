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
        marginTop: 100
    },
    profilePicture:{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 20,  
        elevation: 5,
    },
    profileUsername:{
        marginTop: 20,
        color: '#fff'
    },
    dataContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        marginBottom: -10,
    },
    text2:{
        color: '#575757',
        marginTop: -20,
        marginBottom: 20
    },
    textData:{
        color: '#fff',
        marginTop: 10
    },
    profileButton:{
        width: 200,
        height: 50,
        borderColor: '#faf601',
        borderWidth: 3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    profileButtonText:{
        color: '#fff',
        fontSize: 18
    }
})