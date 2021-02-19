import React, { Component } from 'react'
import './Slider.css'
import TinderCard from 'react-tinder-card'
import * as AiContext from 'react-icons/ai'
import { IconContext } from "react-icons";
import api from '../../../services/api'

export default class Slider extends Component{

    state = {
        meme: []
    }

    componentDidMount() {
        this.loadRequests()
    }

    loadRequests = async() => {
        try{
            const response = await api.get(`/list`)
            this.setState({meme: response.data.docs})
        }catch{
            console.log("Erro ao carregar produtos")
            alert("Erro ao carregar produtos")
        }
    }

    onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
    onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    render(){
        return (
            // <div className="slider">
            <>
            {/* <div className="slider" style={{backgroundColor: '#fff'}}/> */}
            {console.log(this.state.meme)}
            {this.state.meme.map((meme) => (
                <div className="swipe-container">
                    <TinderCard onSwipe={this.onSwipe} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div className="swipe-content">
                            <img src={meme.imageUrl} />

                            <div className="linha-horizontal"/> 

                            <div className="swipe-content-footer">
                            
                                <div className="swipe-content-button-like">
                                    <IconContext.Provider value={{color: "#006eff", size: '40'}}>
                                        <AiContext.AiFillLike/>
                                    </IconContext.Provider>
                                    <p>{meme.likes}</p>
                                </div>

                                <div className="swipe-content-button-dislike">
                                    <IconContext.Provider value={{color: "#006eff", className: "global-class-name", size: '40'}}>
                                        <AiContext.AiOutlineDislike/>
                                    </IconContext.Provider>
                                    <p>{meme.dislikes}</p>
                                </div>

                                <p style={{paddingTop: '40px', color: '#DDD'}}> @{meme.publisherName}</p>

                            </div>
                        </div>
                    </TinderCard>
                </div>
            ))}
            </>
        )

    }
}