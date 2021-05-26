import './upload.css'
import React, {Component} from 'react';
import '../../styles.css'
import {DropContainer,UploadMessage} from './image-upload-components.js'
import Dropzone from 'react-dropzone'
import api from '../../services/api'

export default class Upload extends Component{

    state = {
        uploadingImageUrl: '',
        uploadingImageType: '',
        sending: false

    }

    renderDrageMessage = (isDragActive, isDragReject) => {
        if (!isDragActive){
            return <UploadMessage style={{fontSize: '30px'}}> Drag your image here</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error" style={{marginLeft:'35px'}}> File not suported </UploadMessage>
        }

        return <UploadMessage type="sucess"> Drop your image here </UploadMessage>
    }

    showImageToBeSent  = async (file) => {
        try{
            const imageUrl = URL.createObjectURL(file[0])
            this.setState({uploadingImageUrl: imageUrl, uploadingImageType: file[0].type})

            const image = new FormData()

            image.append('file', file[0], file[0].name)

            this.setState({uploadedImage: image})

        }catch{
            alert('Error send preview image')
        }

    }

    cancelImageUpload = () => {
        this.setState({uploadingImageUrl: '', uploadedImage: ''})
    }

    uploadMeme = async () => {

        this.setState({...this.state, sending: true})

        const image = this.state.uploadedImage
        const description = this.memeDescriptionInput.value

        if(!image){alert('You have to send a image to upload your meme'); this.resetVariables(); return;}

        var imageUrl, mimetype = ''

        const token = localStorage.getItem('token')
        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        }

        await api.post(`/upload/image`,image,authorizaton)
        .then(res => {
            imageUrl = res.data.location
            mimetype = res.data.mimetype
        })
        .catch(erro => {
            console.log(erro.response.data.error)
            alert(erro.response.data.error)
            this.resetVariables()
        })

        if(!imageUrl || !mimetype){alert('Error sending image, try again later'); this.resetVariables(); return;}

        const meme = {
            imageUrl,
            mimetype,
            description,
        }

        console.log(meme)

        await api.post(`/upload`,meme,authorizaton)
        .then(res => {
            console.log(res)
            this.uploadSucessfull()
        })
        .catch(erro => {
            console.log(erro.response.data.error)
            alert(erro.response.data.error)
            this.resetVariables();
        })

        this.resetVariables()
    }

    resetVariables = () => {
        this.setState({uploadingImageUrl: '',uploadingImageType: '', uploadedImage: '', sending: false})
    }

    resetLoading = () => {
        this.setState({...this.state, sending: false})
    }

    uploadSucessfull = () => {
        alert('Upload Sucessfull!')
        window.location.href = '/'
    }

    render(){
        return(   
            <div className="page">
                <h1> Upload </h1>
                <div className="container-upload-image">
                    <Dropzone accept={"image/*","video/*"} onDropAccepted={(file) => this.showImageToBeSent(file)}>
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
                                <button className="btnCancelarEnvioImagem" style={{marginRight: '0px'}} onClick={() => this.cancelImageUpload()}>x </button>
                                { this.state.uploadingImageType.includes('video') ?
                                <iframe alt="Imagem a ser enviada" src={this.state.uploadingImageUrl} style={{width: '280px', height: '280px', border: '2px solid #006eff', borderRadius: '5px'}}/>
                                :
                                <img alt="Imagem a ser enviada" src={this.state.uploadingImageUrl} style={{width: '280px', height: '280px', border: '2px solid #006eff', borderRadius: '5px'}}/>
                                }
                            </div>
                        )}
                    </Dropzone>
                    <div className="meme-description">
                        <p> Descrição: </p>
                        <input ref={input => this.memeDescriptionInput = input} />
                    </div>
                    <button className="btnUpload" onClick={() => this.uploadMeme()}> {this.state.sending === false ? <b>Send meme</b> : <b>Sending...</b>} </button>
                </div>

            </div>
        )
    }


}