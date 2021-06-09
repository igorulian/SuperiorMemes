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
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        marginTop: 15,
        width: 200
    },
    loginButton:{
        width: 200,
        height: 40,
        backgroundColor: '#faf601',
        borderRadius: 10,
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
        marginTop: 10
    }
})