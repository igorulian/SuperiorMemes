import './upload.css'
import React, {Component} from 'react';
import '../../styles.css'
import {DropContainer,UploadMessage} from './image-upload-components.js'
import Dropzone from 'react-dropzone'

export default class Upload extends Component{

    renderDrageMessage = (isDragActive, isDragReject) => {
        if (!isDragActive){
            return <UploadMessage> Arraste sua imagem aqui</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error"> Arquivo não suportado </UploadMessage>
        }

        return <UploadMessage type="sucess"> Solte os arquivos aqui</UploadMessage>
    }

    render(){
        return(   
            <div className="page">
                <h1> Upload </h1>
                <div className="container-upload-image">
                    <Dropzone accept="image/*" onDropAccepted={(file) => this.enviarImagem(file)}>
                        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            <DropContainer {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                            >

                            <input {...getInputProps()}/>

                            {this.renderDrageMessage(isDragActive, isDragReject)}

                            </DropContainer>
                        )}
                    </Dropzone>
                    <div className="publisher-name">
                        <p> Publisher: </p>
                        <input />
                    </div>
                    <button className="btnUpload"> <b>Send meme</b> </button>
                </div>

            </div>
        )
    }


}