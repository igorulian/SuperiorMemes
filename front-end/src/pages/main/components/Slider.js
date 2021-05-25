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
            const token = localStorage.getItem('token')
            const authorizaton = {
                headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

            const response = await api.get(`/list`,authorizaton)
            
            this.setState({meme: response.data})
        }catch{
            console.log("Erro ao carregar memes")
            alert("Erro ao carregar memes")
        }
    }

    onSwipe = async (direction, memeid) => {
        var rate = 0
        direction === 'right' ? rate = 1 : rate = 0

        const token = localStorage.getItem('token')
        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        }

        await api.post(`/rate/${memeid}/${rate}`,{},authorizaton)
        .then(req => { 
            console.log(req)
        }).catch(erro => {
            console.log(erro.response.data.error)
        })

    }
       
    onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }


    render(){
        return (
            <>
            {this.state.meme.length <= 0 && 
                <h1 style={{fontSize: '40px', marginTop: '200px'}}> Você ja viu todos os memes disponíveis por enquanto :) </h1>
            }

            {this.state.meme.map((meme) => (
                <div className="swipe-container" key={meme._id}>
                    <TinderCard onSwipe={(direction, memeid=meme._id) => {this.onSwipe(direction,memeid)}} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div className="swipe-content">
                            <img src={meme.imageUrl}/>

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

                                <p style={{paddingTop: '1px', color: '#333'}}> {meme.description}</p>

                                <p style={{paddingTop: '5px', color: '#DDD'}}> @{meme.publisherName}</p>

                            </div>
                        </div>
                    </TinderCard>
                </div>
            ))}
            </>
        )

    }
}