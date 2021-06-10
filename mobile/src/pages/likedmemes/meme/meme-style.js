import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    memecontainer:{
        backgroundColor: '#282a2e',
        width: 160,
        height: 210,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 2,
    },
    memecontent:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    memeImage:{
        width: 150,
        height: 140,
        margin: 10
    },
    memefooter:{
        // backgroundColor: '#333',
        height: 50,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center'
    },
    memeDescription:{
        fontSize: 10,
        color: '#fff',
        margin: 5
    },
    memePublisher: {
        fontSize: 5,
        color: '#fff8'
    }
})