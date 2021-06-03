import './upload.css'
import React, {Component} from 'react';
import '../../styles.css'
import {DropContainer,UploadMessage} from './image-upload-components.js'
import Dropzone from 'react-dropzone'
import api from '../../services/api'
import BackButton from '../components/backbutton'
import AlertMessage from '../components/message-alert/message-alert'

export default class Upload extends Component{

    state = {
        uploadingImageUrl: '',
        uploadingImageType: '',
        sending: false,
        alert: {
            active: false,
            message: 'sample message',
            function: () => {}
        }
    }

    renderDrageMessage = (isDragActive, isDragReject) => {
        if (!isDragActive){
            return <UploadMessage style={{fontSize: '30px'}}> Drag your meme here</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error" style={{marginLeft:'35px'}}> File not suported </UploadMessage>
        }

        return <UploadMessage type="sucess"> Drop your meme here </UploadMessage>
    }

    showImageToBeSent  = async (file) => {
        try{
            const imageUrl = URL.createObjectURL(file[0])
            this.setState({uploadingImageUrl: imageUrl, uploadingImageType: file[0].type})

            const image = new FormData()

            image.append('file', file[0], file[0].name)

            this.setState({uploadedImage: image})

        }catch{
            this.setState({alert: {active: true, message: 'Error in show meme preview', function: this.setAlertToFalse}})
        }

    }

    cancelImageUpload = () => {
        this.setState({uploadingImageUrl: '', uploadedImage: ''})
    }

    uploadMeme = async () => {

        this.setState({...this.state, sending: true})

        const image = this.state.uploadedImage
        const description = this.memeDescriptionInput.value

        if(!image){    
            this.setState({alert: {active: true, message: 'You have to send a image to upload your meme', function: this.setAlertToFalse, type:'error'}})
            this.resetVariables(); 
            return;
        }

        const token = localStorage.getItem('token')
        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        }

        const {imageUrl, mimetype} = await this.uploadImage(image,authorizaton)

        if(!imageUrl || !mimetype){
            this.setState({alert: {active: true, message: 'Error sending image, try again later', function: this.setAlertToFalse}})
            this.resetVariables(); 
            return;
        }

        const meme = {
            imageUrl,
            mimetype,
            description,
        }

        await api.post(`/upload`,meme,authorizaton)
        .then(res => {
            console.log(res)
            this.uploadSucessfull()
        })
        .catch(erro => {
            console.log(erro.response.data.error)
            this.setState({alert: {active: true, message: erro.response.data.error, function: this.setAlertToFalse}})
            this.resetVariables();
        })

        this.resetVariables()
    }


    uploadImage = async (image, authorizaton) => {
        var imageUrl, mimetype = ''

        await api.post(`/upload/image`,image,authorizaton)
        .then(res => {
            imageUrl = res.data.location
            mimetype = res.data.mimetype
        })
        .catch(erro => {
            console.log(erro.response.data.error)
            this.setState({alert: {active: true, message: erro.response.data.error, function: this.setAlertToFalse}})
            this.resetVariables()
        })

        return {imageUrl, mimetype}
    }

    resetVariables = () => {
        this.setState({uploadingImageUrl: '',uploadingImageType: '', uploadedImage: '', sending: false})
    }

    resetLoading = () => {
        this.setState({...this.state, sending: false})
    }

    uploadSucessfull = () => {
        this.setState({alert: {active: true, message: 'Upload Successful', function: this.goToMainPage, type: 'success'}})
    }

    goToMainPage = () => {
        window.location.href = '/'
    }

    setAlertToFalse = () => {
        this.setState({alert: {active: false, type: ''}})
    }

    render(){
        return(   
            <div className="page">
                <AlertMessage type={this.state.alert.type} alert={this.state.alert.active} message={this.state.alert.message} onOK={this.state.alert.function} />
                <BackButton/>
                <h1> Upload </h1>
                <div className="container-upload-image">
                    <Dropzone accept={["image/*","video/*"]} onDropAccepted={(file) => this.showImageToBeSent(file)}>
                        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            this.state.uploadingImageUrl === '' ?
                            <DropContainer {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                            >
                            

                            <input {...getInputProps()}/>

                            {this.renderDrageMessage(isDragActive, isDragReject)}

                            </DropContainer>
                            : 
                            <div>
                                <button className="btnCancelarEnvioImagem" style={{marginRight: '0px', color: '#333'}} onClick={() => this.cancelImageUpload()}>x </button>
                                { this.state.uploadingImageType.includes('video') ?
                                <iframe title="Video a ser enviado" alt="Video a ser enviado" src={this.state.uploadingImageUrl} style={{width: '280px', height: '280px', border: '2px solid #faf601', borderRadius: '5px'}}/>
                                :
                                <img alt="Imagem a ser enviada" src={this.state.uploadingImageUrl} style={{width: '280px', height: '280px', border: '2px solid #faf601', borderRadius: '5px'}}/>
                                }
                            </div>
                        )}
                    </Dropzone>
                    <div className="meme-description">
                        <p> Description: </p>
                        <input ref={input => this.memeDescriptionInput = input} />
                    </div>
                    <button className="btnUploadMeme" onClick={() => this.uploadMeme()}> {this.state.sending === false ? <b>Send meme</b> : <b>Sending...</b>} </button>
                </div>

            </div>
        )
    }


}