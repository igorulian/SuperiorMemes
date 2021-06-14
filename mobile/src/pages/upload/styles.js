import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1f2125',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
    },
    title:{
        color: '#faf601',
        fontSize: 20,
        marginBottom: 20,
        top: 0,
        position: 'absolute'
    },
    uploadContainer:{
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadContent:{
        width: 300,
        height: 300,
        borderColor: '#faf601',
        borderStyle: 'dotted',
        borderWidth: 4,
        borderRadius: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadButton:{
        width: 200,
        height: 45,
        backgroundColor: '#faf601',    
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadButtonText:{
        color: '#000',
        fontSize: 20
    },
    descriptionContainer:{
        marginTop: 20
    },
    descriptionInput:{
        borderWidth: 2,
        borderColor: '#faf601',
        padding: 5,
        paddingLeft: 10,
        width: 300,
        height: 40,
        color: '#fff',
        marginTop: 5
    },
    descriptionTxt:{
        color: '#faf601'
    }
})