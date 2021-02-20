import './upload.css'
import React, {Component} from 'react';
import '../../styles.css'
import {DropContainer,UploadMessage} from './image-upload-components.js'
import Dropzone from 'react-dropzone'
import api from '../../services/api'

export default class Upload extends Component{

    state = {
        uploadingImageUrl: '',
        sending: false

    }

    renderDrageMessage = (isDragActive, isDragReject) => {
        if (!isDragActive){
            return <UploadMessage> Arraste sua imagem aqui</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error"> Arquivo não suportado </UploadMessage>
        }

        return <UploadMessage type="sucess"> Solte os arquivos aqui</UploadMessage>
    }

    showImageToBeSent  = async (file) => {
        try{
            //URL.createObjectURL(file) // URL.createObjectURL(file[0])
            const imageUrl = URL.createObjectURL(file[0])
            this.setState({uploadingImageUrl: imageUrl})

            const image = new FormData()

            console.log(file[0])

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

        if(!image){alert('You have to send a image to upload your meme'); this.resetVariables(); return;}

        var imageUrl = ''

        await api.post(`/upload/image`,image).then(res => {
            imageUrl = res.data.location
        }).catch(err => {
            console.log(err)
            alert('Error sending image, try a smaller one')
            this.resetVariables()
        })

        if(imageUrl == ''){alert('Error sending image, try again later'); this.resetVariables(); return;}

        const publisherName = this.publisherNameInput.value

        const meme = {
            publisherName,
            imageUrl,
        }

        console.log(meme)
        if(!publisherName){alert('Type your publisher name'); this.resetLoading(); return;}

        await api.post(`/upload`,meme).then(res => {
            console.log(res)
            this.uploadSucessfull()
        }).catch(err => {
            console.log(err)
            alert('Error sending meme, try again later')
            this.resetVariables();
        })

        this.resetVariables()
    }

    resetVariables = () => {
        this.setState({uploadingImageUrl: '',uploadedImage: '', uploadedImageUrl: '', sending: false})
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
                    <Dropzone accept="image/*" onDropAccepted={(file) => this.showImageToBeSent(file)}>
                        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            this.state.uploadingImageUrl == '' ?
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
                                <img src={this.state.uploadingImageUrl} style={{width: '280px', height: '280px', border: '2px solid #006eff', borderRadius: '5px'}}/>
                            </div>
                        )}
                    </Dropzone>
                    <div className="publisher-name">
                        <p> Publisher: </p>
                        <input ref={input => this.publisherNameInput = input} />
                    </div>
                    <button className="btnUpload" onClick={() => this.uploadMeme()}> {this.state.sending == false ? <b>Send meme</b> : <b>Sending...</b>} </button>
                </div>

            </div>
        )
    }


}