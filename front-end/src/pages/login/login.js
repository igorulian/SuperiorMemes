import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'
import './login.css'
import api from '../../services/api'
import BackButton from '../components/backbutton'
import AlertMessage from '../components/message-alert/message-alert'

export default class Login extends Component{

    state = {
        loading: false,
        alert: {
            active: false,
            message: 'sample message',
            function: () => {}
        }
    }

    login = async () => {
        const email = this.emailInput.value
        const pass = this.passInput.value

        if(!email || !pass){
            this.setState({alert: {active: true, type:'warning', message: 'Fill all the fields', function: this.setAlertToFalse}})
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
            this.setState({alert: {active: true, type:'error', message: erro.response.data.error, function: this.setAlertToFalse}})
        })

    }

    redirectToDashboard = () =>{
        window.location.href = '/'
    }

    setAlertToFalse = () => {
        this.setState({alert: {active: false}})
    }

    render(){
        return(   
            <div className="page">
                <AlertMessage type={this.state.alert.type} alert={this.state.alert.active} message={this.state.alert.message} onOK={this.state.alert.function} />
                <BackButton/>

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