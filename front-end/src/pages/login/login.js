import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'
import './login.css'
import api from '../../services/api'

export default class Login extends Component{

    state = {
        loading: false
    }

    login = async () => {
        const email = this.emailInput.value
        const pass = this.passInput.value

        if(!email || !pass){
            alert('Fill in all fields ')
            return
        }

        this.setState({loading: true})

        await this.requestLogin(email, pass)
        this.setState({loading: false})
    }

    requestLogin = async (email, password) => {
        const req = {
            email,
            password
        }
        await api.post(`/login`, req).then(response => {
            const token = response.data.token
            localStorage.setItem("token", token)

            this.redirectToDashboard()

        }).catch(erro => {
            alert(erro.response.data.error)
        })

    }

    redirectToDashboard = () =>{
        window.location.href = '/'
    }

    render(){
        return(   
            <div className="page">

                <h2 className="login-title"> Login </h2>

                <div className="login-container">
                    <p className="email-txt"> Email: </p>
                    <input placeholder="Type your email" type="email" ref={input => this.emailInput = input}/>

                    <p className="passw-txt"> Password: </p>
                    <input placeholder="Type your password" type="password" ref={input => this.passInput = input}/>

                    <button className="btnLogin" onClick={() => this.login()}> {this.state.loading === false ? 'Login' : 'Loading...'} </button>

                    <div className="register-txt">
                        <Link to="/register"> <p>Register now</p> </Link>
                    </div>
                    
                </div>


            </div>
        )
    }


}