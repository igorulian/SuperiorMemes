import React, {Component} from 'react';
import '../../styles.css'
import './register.css'
import api from '../../services/api'

export default class Register extends Component{

    state = {
        loading: false
    }


    register = async () => {
        const user = this.userInput.value
        const email = this.emailInput.value
        const pass = this.passInput.value
        const pass2 = this.pass2Input.value

        console.log(user)
        console.log(email)
        console.log(pass)

        
        if(!email || !pass || !pass2 || !user){
            alert('Fill in all fields ')
            return
        }

        if(!(pass === pass2)){
            alert('Passwords do not match ')
            return
        }


        this.setState({loading: true})
        
        await this.requestRegister(user,email,pass)

        this.setState({loading: false})
    }

    requestRegister = async (user, email, password) => {

        const localRatedMemes = JSON.parse(localStorage.getItem('guestRatedMemes'))


        const req = {
            user,
            email,
            password,
            localRatedMemes
        }

        await api.post(`/register`, req)
        .then(response => {
            const token = response.data.token
            localStorage.setItem("token", token)
            localStorage.setItem('guestRatedMemes', null)
            this.redirectToDashboard()
        })
        .catch(erro => {
            alert(erro.response.data.error)
        })
    }

    redirectToDashboard = () =>{
        window.location.href = '/'
    }

    render(){
        return(   
            <div className="page">

                <h2 className="login-title"> Register </h2>

                <div className="login-container">
                    <p className="email-txt"> Username: </p>
                    <input placeholder="Type your username" type="username"  ref={input => this.userInput = input}/>
                    <p className="email-txt"> Email: </p>
                    <input placeholder="Type your email" type="email" ref={input => this.emailInput = input}/>
                    <p className="passw-txt"> Password: </p>
                    <input placeholder="Type your password" type="password" ref={input => this.passInput = input}/>
                    <p className="passw-txt"> Confirm password: </p>
                    <input placeholder="Confirm your password" type="password" ref={input => this.pass2Input = input}/>
                    <button className="btnLogin" onClick={() => this.register()}> {this.state.loading === false ? 'Register' : 'Loading...'} </button>
                    
                </div>


            </div>
        )
    }


}