import React, {Component} from 'react';
import './likedmemes.css'
import MemeContainer from './components/memecontainer'
import BackButton from '../components/backbutton'
import Loading from '../components/loading'
import api from '../../services/api'
import AlertMessage from '../components/message-alert/message-alert'

export default class LikedMemes extends Component{

    state = {
        memes: [],
        isLoading: true,
        alert: {
            active: false,
            message: 'sample message',
            function: () => {},
        }
    }

    async componentDidMount(){
        await this.requestLikes()
        this.setState({isLoading: false})
    }

    requestLikes = async () => {
        try{
            const token = localStorage.getItem('token')
            
            const authorizaton = {
                headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

            const response = await api.get(`/list/liked`,authorizaton)
            this.setState({memes: response.data})

        }catch(err){
            console.log("Erro ao carregar memes")
            this.setState({alert: {active: true, message: 'Error in load memes', type: 'error'}})
        }
    }

    


    render(){
        return(
            <div className="page">
                <AlertMessage type={this.state.alert.type} alert={this.state.alert.active} message={this.state.alert.message} onOK={() => {this.setState({alert: {active: false, type: ''}})}} />
                
                <Loading isLoading={this.state.isLoading}/>

                {!this.state.isLoading && this.state.memes.length <= 0 &&
                <h1 style={{fontSize: '40px',position: 'absolute', marginRight: 'auto', marginLeft: 'auto', left: 0, right: 0, marginTop:'300px'}}> You haven't liked any meme yet :/ </h1>
                }

                <h1> Liked Memes </h1>
                <BackButton/>

                <div className="meme-list">

                    {this.state.memes.map(meme => (
                        <MemeContainer meme={meme} key={meme._id}/>
                    ))}
                    
                </div>
            

            </div>
        )
    }

}