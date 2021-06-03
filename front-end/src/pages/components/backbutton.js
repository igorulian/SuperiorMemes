import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default class BackButton extends Component{


    render(){
        return(
            <Link to={'/'} style={linkStyle}>
                
                <IconContext.Provider value={{color: "#faf601", size: '40'}}>
                    <FaArrowLeft/>
                </IconContext.Provider>

            </Link>
        )
    }

}

const linkStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: '50px',
    marginLeft: '50px'
}