import React, { Component } from 'react'
import './Slider.css'
import TinderCard from 'react-tinder-card'
import * as AiContext from 'react-icons/ai'
import { IconContext } from "react-icons";
import api from '../../../services/api'
import Loading from '../../components/loading'

export default class Slider extends Component{         

    state = {
        meme: [],
        isLoading: true,
        currentCardIndex: 0
    }

    async componentDidMount() {
        await this.loadRequests()
        this.setState({isLoading: false})
    }

    loadRequests = async() => {
        try{
            const token = localStorage.getItem('token')

            if(!token){
                await this.guestLoadRequest()
                return
            }

            const authorizaton = {
                headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

            const response = await api.get(`/list`,authorizaton)
            
            this.setState({meme: response.data})


        }catch(erro){
            this.props.onError('Error loading memes')
        }
    }


    guestLoadRequest = async () => {
        var ratedMemes = []

        const ratedMemesLocal = localStorage.getItem('guestRatedMemes')

        if(ratedMemesLocal)
            ratedMemes = JSON.parse(ratedMemesLocal)
        

        const req = {
            ratedMemes
        }
        
        const response = await api.post(`/guest/list`,req, {})
        this.setState({meme: response.data})
    }

    onSwipe = async (direction, memeobj) => {
        this.setState({currentCardIndex: this.state.currentCardIndex + 1})
        console.log(`carIndex: ${this.state.currentCardIndex}`)
        console.log(`Meme Index: ${this.state.meme.indexOf(memeobj)}`)

        const rate = direction === 'right' ? 1 :  0

        const memeid = memeobj._id

        const token = localStorage.getItem('token')
        const authorizaton = {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        }

        if(!token){
            var newReateMemesLocal = []
            const rateMemesLocal = JSON.parse(localStorage.getItem('guestRatedMemes'))
            if(rateMemesLocal){
                newReateMemesLocal = rateMemesLocal
            }

            console.log({memeid,rate})
            newReateMemesLocal.push({memeid,rate})
            localStorage.setItem('guestRatedMemes',JSON.stringify(newReateMemesLocal))

            
            if(this.state.meme.indexOf(memeobj) <= 0)
                this.loadRequests()

            return
        }

        await api.post(`/rate/${memeid}/${rate}`,{},authorizaton)
        .then(req => { 
            console.log(req)
        }).catch(erro => {
            this.props.onError('Error rating memes')
        })

        if(this.state.meme.indexOf(memeobj) <= 0)
            this.loadRequests()
        

    }
       
    onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }


    render(){
        return (
            <>
            <Loading isLoading={this.state.isLoading}/>
     
            {this.state.meme.length <= 0 && !this.state.isLoading && 
                <h1 style={{fontSize: '40px', marginTop: '200px'}}> You have seen all the memes available so far  :) </h1>
            }

            {this.state.meme.map(meme => (
                <div className="swipe-container" key={meme._id}>
                    
                    <TinderCard onSwipe={(direction, memeobj=meme) => {this.onSwipe(direction,memeobj)}} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div className="swipe-content"> 

                            {console.log(`MEME ${this.state.meme.indexOf(meme)} || CARD  ${this.state.currentCardIndex}`)}

                            {meme.mimetype.includes('video') ?
                                <video 
                                src={meme.imageUrl}
                                autoPlay={this.state.meme.indexOf(meme) === this.state.currentCardIndex}
                                controls={true}/>
                            :
                                <img src={meme.imageUrl} alt="Meme content"/> 
                            
                            }

                            <div className="linha-horizontal"/> 

                            <div className="swipe-content-footer">
                            
                                <div className="swipe-content-button-like">
                                    <IconContext.Provider value={{color: "#faf601", size: '40'}}>
                                        <AiContext.AiFillLike/>
                                    </IconContext.Provider>
                                    <p>{meme.likes}</p>
                                </div>

                                <div className="swipe-content-button-dislike">
                                    <IconContext.Provider value={{color: "#faf601", className: "global-class-name", size: '40'}}>
                                        <AiContext.AiOutlineDislike/>
                                    </IconContext.Provider>
                                    <p>{meme.dislikes}</p>
                                </div>

                                <p style={{paddingTop: '1px', color: '#DDD'}}> {meme.description}</p>

                                <p style={{paddingTop: '5px', color: '#3f3f3f'}}> @{meme.publisherName}</p>

                            </div>
                        </div>
                    </TinderCard>
                </div>
            ))}

        </>
        )
    }
}