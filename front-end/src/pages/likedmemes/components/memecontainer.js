import React, {Component} from 'react';
import './memecontainer.css'
import {AiFillLike,AiOutlineDislike} from 'react-icons/ai'
import { IconContext } from "react-icons";

export default class MemeContainer extends Component{

    state = {
        meme: this.props.meme
    }


    render(){
        console.log(this.state.meme)
        return(
            <div className="meme-container">
                <div className="meme-content">

                    {this.state.meme.mimetype.includes('video') 
                    ? 
                        <video
                        src={this.state.meme.imageUrl}
                        autoPlay={true}
                        />
                    :
                        <img src={this.state.meme.imageUrl} alt="Meme content"/> 

                    }

                    <div className="linha-horizontal"/> 

                    <div className="meme-content-footer">

                        <div className="meme-content-button-like">
                            <IconContext.Provider value={{color: "#faf601", size: '25'}}>
                                <AiFillLike/>
                            </IconContext.Provider>
                            <p>{this.state.meme.likes}</p>
                        </div>

                        <div className="meme-content-button-dislike">
                            <IconContext.Provider value={{color: "#faf601", className: "global-class-name", size: '25'}}>
                                <AiOutlineDislike/>
                            </IconContext.Provider>
                            <p>{this.state.meme.dislikes}</p>
                        </div>

                        <p style={{paddingTop: '1px', color: '#DDD', fontSize: '12px'}}> {this.state.meme.description}</p>

                        <p style={{paddingTop: '5px', color: '#3f3f3f'}}> @{this.state.meme.publisherName}</p>

                    </div>
                </div>
            </div>
        )
    }

}