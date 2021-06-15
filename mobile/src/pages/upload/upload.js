import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import {styles} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Upload extends Component {

    state = {
        memeToBeUploaded: {},
        hasImagePreview: false,
        uploading: false,
        memeDescription: ''

    }


    getMeme = async () =>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images, DocumentPicker.types.video],
            });

            const {uri,type,size} = res

            const maxSize = 2 * 1024 * 1024
            const allowedMimes = [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/gif',
                "video/wav",
                "video/mp4" ]

            if(!allowedMimes.includes(type))
                return Alert.alert('File not suported', 'try another one')

            if(size >= maxSize)
                return Alert.alert('File too large', 'try a smaller one')

            this.setState({
                memeToBeUploaded:{
                    uri,
                    type,
                    file: res
                }, hasImagePreview: true
            })

          } catch (err) {
                this.cancelMemePreview()
                if (DocumentPicker.isCancel(err)) {
                    Alert.alert('ERROR', err)
                }
          }
    }

    cancelMemePreview = () => {
        this.setState({memeToBeUploaded: {}, hasImagePreview: false, memeDescription: ''})
    }


    publishMeme = async () => {
        this.setState({uploading: true})
        try{

            const {file} = this.state.memeToBeUploaded
            const {memeDescription} = this.state

            if(!file){
                this.cancelMemePreview()
                return Alert.alert('ERROR', 'no file provided')
            }

            const token = await AsyncStorage.getItem('token')
            const authorizaton = {
                headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

            const uploadedFile = await this.uploadImage(file,authorizaton)

            const {imageUrl, mimetype} = uploadedFile

            if(!imageUrl || !mimetype){
                Alert.alert('ERROR', 'Erro in upload image, try again later')
                this.cancelMemePreview(); 
                return;
            }

            const meme = {
                imageUrl,
                mimetype,
                description: memeDescription
            }

            const response = await api.post(`/upload`,meme,authorizaton)

            console.log(response)
            this.uploadSucessfull()
            this.cancelMemePreview()
        }catch{
            console.log("ERRO FATAU")
        }
        
        this.setState({uploading: false})
    }


    uploadImage = async (file,authorizaton) => {
        const fileData = new FormData()
        fileData.append('file', file, file.name)

        const response = await api.post(`/upload/image`,fileData,authorizaton)

        const uploadedFile = {
            imageUrl: response.data.location,
            mimetype: response.data.mimetype
        }

        console.log(uploadedFile)

        return uploadedFile
    }

    uploadSucessfull = () => {
        Alert.alert('Upload Sucessfull!', 'nice job!')
    }


    render() {
        const MemePreview = () => (
            <View style={styles.imagePreviewCapsule}>
                <View style={styles.imagePreviewContainer}>

                    {this.state.memeToBeUploaded.type.includes('video') ? 
                    <Video paused={true} style={styles.imagePreview} source={{uri: this.state.memeToBeUploaded.uri}}/> 
                    :  
                    <Image style={styles.imagePreview} source={{uri: this.state.memeToBeUploaded.uri}}/>
                    }
                </View>

                <TouchableOpacity style={styles.imagePreviewContainerX} onPress={() => {this.cancelMemePreview()}}> 
                    <Text> X </Text>
                </TouchableOpacity>


            </View>
        )

        const UploadMemeArea = () => (
            <TouchableOpacity style={styles.uploadContent} onPress={() => {this.getMeme()}}>
                <MaterialCommunityIcons name="upload" color={'#faf601'} size={100} />
                <Text style={styles.descriptionTxt}> Click to select your meme</Text>
            </TouchableOpacity>
        )

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Upload 
                </Text>

                <View style={styles.uploadContainer}>

                    {this.state.hasImagePreview ? <MemePreview/> : <UploadMemeArea/> } 

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionTxt}> Description </Text>
                        <TextInput style={styles.descriptionInput} textCo onChangeText={text => {this.setState({memeDescription: text})}} />
                    </View>


                    <TouchableOpacity style={styles.uploadButton} onPress={() => {this.publishMeme()}} enable={false}>
                        <Text style={styles.uploadButtonText}>  {this.state.uploading ? 'Uploading...' : 'Publish Meme'} </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

