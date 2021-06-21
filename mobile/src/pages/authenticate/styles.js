import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        top: 0,
        fontSize: 30,
        marginBottom: '10%',
        color: '#faf601',
        textShadowColor: '#faf601',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 15
    },
    input:{
        borderWidth: 1,
        borderColor: '#faf601',
        // borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        width: 250,
        color: '#fff'
    },
    loginButton:{
        width: 200,
        height: 40,
        backgroundColor: '#faf601',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonText:{
        color: '#000',
        fontSize: 20
    },
    registerText:{
        color: '#fff',
        margin: 15
    },
    content:{
        marginBottom: 120,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
    },
    inputtxt:{
        marginBottom: 5,
        marginTop: 10,
        color: '#faf601'
    },
    loginWithContainer:{
        flexDirection: 'row'
    },
    loginWithContent:{
        backgroundColor: '#1d1d1d',
        height: 40,
        width: 120,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 2,
    },
    loginWithContentText:{
        fontSize: 9,
        marginLeft: 5,
        color: '#fff'
    }
})