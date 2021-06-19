import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1f2125',
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
        alignItems: 'center'
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
        color: '#333',
        marginBottom: -10,
    },
    text2:{
        color: '#333',
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
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    profileButtonText:{
        color: '#fff'
    }
})