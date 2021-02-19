import React, { Component } from 'react'
import './Slider.css'
import TinderCard from 'react-tinder-card'
import * as AiContext from 'react-icons/ai'
import { IconContext } from "react-icons";

export default class Slider extends Component{

    state = {
        meme: [
            {
                publisherName: 'Iguinho',
                publisherID: '6234623746237',
                memeLikes: '23',
                memeDislikes: '3234',
                link: 'http://pensaraeducacao.com.br/rbeducacaobasica/wp-content/uploads/sites/5/2018/10/capa-para-artigo.jpg'
            },
            {
                publisherName: 'Iguinho2',
                publisherID: '6234623746237',
                memeLikes: '1',
                memeDislikes: '87643',
                link: 'https://i.pinimg.com/564x/84/f9/e9/84f9e953fef2342e017fe4f95a241464.jpg'
            }, 
            {
                publisherName: 'Iguinho3',
                publisherID: '237',
                memeLikes: '1123',
                memeDislikes: '545',
                link: 'https://s2.glbimg.com/u9kjj3s_n1MbEkXhvtDhdnorc7w=/0x0:535x583/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/e/O/aqCMmST1qmjfJaL63cKQ/meme-1.jpg'
            }, 
            {
                publisherName: 'Iguinho4',
                publisherID: '746237',
                memeLikes: '81123',
                memeDislikes: '545',
                link: 'https://blogs.correiobraziliense.com.br/papodeconcurseiro/wp-content/uploads/sites/14/2019/09/Na%C3%A7%C3%A3o-Jur%C3%ADdica.jpg'
            },
            {
                publisherName: 'Iguinho5',
                publisherID: '23746237',
                memeLikes: '91123',
                memeDislikes: '545',
                link: 'https://img.estadao.com.br/fotos/crop/640x400/resources/jpg/6/5/1577718484956.jpg'
            },
            {
                publisherName: 'Iguinho6',
                publisherID: '34623746237',
                memeLikes: '1132323',
                memeDislikes: '545',
                link: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/01/Memes-Fuvest.jpg'
            },
        ]
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
            {this.state.meme.map((meme) => (
                <div className="swipe-container">
                    <TinderCard onSwipe={this.onSwipe} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div className="swipe-content">
                            <p> {meme.name} </p>
                            <img src={meme.link} />

                            <div className="linha-horizontal"/> 

                            <div className="swipe-content-footer">
                            
                                <div className="swipe-content-button-like">
                                    <IconContext.Provider value={{color: "#006eff", size: '40'}}>
                                        <AiContext.AiFillLike/>
                                    </IconContext.Provider>
                                    <p>{meme.memeLikes}</p>
                                </div>

                                <div className="swipe-content-button-dislike">
                                    <IconContext.Provider value={{color: "#006eff", className: "global-class-name", size: '40'}}>
                                        <AiContext.AiOutlineDislike/>
                                    </IconContext.Provider>
                                    <p>{meme.memeDislikes}</p>
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