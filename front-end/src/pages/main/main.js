import './main.css'
import React, {Component} from 'react';
import '../../styles.css'
import Slider from './components/Slider'
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

export default class Main extends Component{

    render(){
        return(
            <div className="page">
                <Link to="/liked"><button className="btnLikedMemes"> <AiFillHeart size="2em"/> </button></Link>
                <Link to="/upload"><button className="btnUpload"> <p>Upload your meme</p> </button></Link>
                <h1> Quack Memes </h1>
                <Slider/>
            </div>
        )
    }


}