import './main.css'
import React, {Component} from 'react';
import '../../styles.css'
import Slider from './components/Slider'
import { Link } from 'react-router-dom';

export default class Main extends Component{

    render(){
        return(   
            <div className="page">
                <Link to="/upload"><button className="btnUpload"> <p>Upload your meme</p> </button></Link>
                <h1 style={{paddingLeft: '133px'}}> Cool site </h1>
                <Slider/>
            </div>
        )
    }


}