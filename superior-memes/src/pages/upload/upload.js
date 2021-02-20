import './upload.css'
import React, {Component} from 'react';
import '../../styles.css'
import {DropContainer,UploadMessage} from './image-upload-components.js'
import Dropzone from 'react-dropzone'
import api from '../../services/api'

export default class Upload extends Component{

    state = {
        uploadedImageUrl: '',

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

    enviarImagem = async (file) => {
        try{
            //URL.createObjectURL(file) // URL.createObjectURL(file[0])
            const imageUrl = URL.createObjectURL(file[0])
            this.setState({uploadedImageUrl: imageUrl})

            const image = new FormData()

            console.log(file[0])

            image.append('file', file[0], file[0].name)

            // this.setState({isUploadingFile: true})

            this.setState({uploadedImage: image})

        }catch{
            alert('Erro ao enviar imagem')
        }

    }

    cancelarEnvioImagem = () => {
        this.setState({uploadedImageUrl: ''})
    }

    uploadMeme = async () => {

        const image = this.state.uploadedImage

        if(!image){alert('Você precisa enviar um imagem para upar o meme'); return;}

        await api.post(`/upload`,image).then(res => {

        }).catch(err => {
            console.log(err)
            alert('Erro ao enviar a imagem, tente uma imagem menor')
        })
    }

    render(){
        return(   
            <div className="page">
                <h1> Upload </h1>
                <div className="container-upload-image">
                    <Dropzone accept="image/*" onDropAccepted={(file) => this.enviarImagem(file)}>
                        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            this.state.uploadedImageUrl == '' ?
                            <DropContainer {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                            >
                            

                            <input {...getInputProps()}/>

                            {this.renderDrageMessage(isDragActive, isDragReject)}

                            </DropContainer>
                            : 
                            <div>
                                <button className="btnCancelarEnvioImagem" style={{marginRight: '0px'}} onClick={() => this.cancelarEnvioImagem()}>x </button>
                                <img src={this.state.uploadedImageUrl} style={{width: '280px', height: '280px', border: '2px solid #006eff', borderRadius: '5px'}}/>
                            </div>
                        )}
                    </Dropzone>
                    <div className="publisher-name">
                        <p> Publisher: </p>
                        <input />
                    </div>
                    <button className="btnUpload" onClick={() => this.uploadMeme()}> <b>Send meme</b> </button>
                </div>

            </div>
        )
    }


}