import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
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
        alignItems: 'center',
        backgroundColor: '#1d1d1d'
    },
    uploadButton:{
        width: 150,
        height: 45,
        borderColor: '#faf601',    
        borderWidth: 2,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,   
    },
    uploadButtonText:{
        color: '#fff',
        fontSize: 19,
        marginRight: 5
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
    clickToSelectTxt:{
        color: '#ccc'
    },
    descriptionTxt:{
        color: '#faf601'
    },
    imagePreview:{
        width: 300,
        height: 300
    },
    imagePreviewContainer:{
        borderWidth: 1,
        borderColor: '#faf601',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5
    },
    imagePreviewContainerX:{
        top: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: '#faf601',
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    imagePreviewCapsule:{
        width: 325,
        height: 325,
        justifyContent: 'center',
        alignItems: 'center'
    }
})