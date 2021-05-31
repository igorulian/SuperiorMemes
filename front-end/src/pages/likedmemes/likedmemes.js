import React, {Component} from 'react';
import './likedmemes.css'
import MemeContainer from './components/memecontainer'

export default class LikedMemes extends Component{

    state = {
        memes: [{
            publisherName: "iguera",
            publisherID: "60aac83e135daa2098b863f2",
            imageUrl: "https://superior-memes.s3.sa-east-1.amazonaws.com/60ad2e88953a9a0b68b135df-5f41be32d17fdee7ef26ab32c90ff8e4",
            mimetype: "video/mp4",
            description: "COLEHOK K2222KKKK",
            likes: 10,
            dislikes: 20
            },
            {
            publisherName: "iguera",
            publisherID: "60aac83e135daa2098b863f2",
            imageUrl: "https://superior-memes.s3.amazonaws.com/60aac83e135daa2098b863f2-d823cd3777d814f4485a197eae868ce8",
            mimetype: "image/png",
            description: "COLEHOK K2222KKKK",
            likes: 10,
            dislikes: 20
            },
            {
            publisherName: "iguera",
            publisherID: "60aac83e135daa2098b863f2",
            imageUrl: "https://superior-memes.s3.sa-east-1.amazonaws.com/60ad2e88953a9a0b68b135df-5f41be32d17fdee7ef26ab32c90ff8e4",
            mimetype: "video/mp4",
            description: "COLEHOK K2222KKKK",
            likes: 10,
            dislikes: 20
            },
        ]
    }

    render(){
        return(
            <div className="page">
                <h1> Liked Memes </h1>

                <div className="meme-list">
                    {
                    this.state.memes.map(meme => (
                        <MemeContainer meme={meme}/>
                    ))
                    }
                </div>
            

            </div>
        )
    }

}