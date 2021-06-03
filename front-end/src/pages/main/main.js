import './main.css'
import React, {Component} from 'react';
import '../../styles.css'
import Slider from './components/Slider'
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import AlertMessage from '../components/message-alert/message-alert'

export default class Main extends Component{

    state = {
        alert: {
            active: false,
            message: 'sample message',
            function: () => {this.setState({alert:{active: false}})}
        }
    }

    makeAlert = txt => {
        this.setState({alert: {...this.state.alert, active: true, message: 'Error in load memes', type: 'error'}})
    } 

    render(){
        return(
            <div className="page">
                <AlertMessage type={this.state.alert.type} alert={this.state.alert.active} message={this.state.alert.message} onOK={this.state.alert.function} />

                <Link to="/liked"><button className="btnLikedMemes"> <AiFillHeart size="2em"/> </button></Link>
                <Link to="/upload"><button className="btnUpload"> <p>Upload your meme</p> </button></Link>
                <h1> Quack Memes </h1>
                <Slider onError={error => this.makeAlert(error)}/>
            </div>
        )
    }


}