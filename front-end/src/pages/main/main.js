import './main.css'
import React, {Component} from 'react';
import '../../styles.css'
import Slider from './components/Slider'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default class Main extends Component{

    render(){
        return(
            <div className="page">
                <Link to="/profile"><button className="btnUpload"> <CgProfile size="2em"/> </button></Link>
                <Link to="/upload"><button className="btnUpload"> <p>Upload your meme</p> </button></Link>
                <h1 style={{paddingLeft: '133px'}}> Superior Memes </h1>
                <Slider/>
            </div>
        )
    }


}