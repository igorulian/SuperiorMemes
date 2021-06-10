import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1f2125',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#faf601',
        top: 0,
        fontSize: 30,
        marginBottom: '10%'
    },
    input:{
        borderWidth: 2,
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
        // borderRadius: 10,
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
        backgroundColor: '#282a2e',
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