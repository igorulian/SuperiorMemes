import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'
import './login.css'

export default class Login extends Component{

    render(){
        return(   
            <div className="page">

                <h2 className="login-title"> Login </h2>

                <div className="login-container">
                    <p className="email-txt"> Email: </p>
                    <input placeholder="Type your email" type="email"/>
                    <p className="passw-txt"> Password: </p>
                    <input placeholder="Type your password" type="password"/>
                    <button className="btnLogin"> Login </button>
                    <div className="register-txt">
                        <Link to="/register"> <p>Register now</p> </Link>
                        {/* <p> a</p> */}
                    </div>
                    
                </div>


            </div>
        )
    }


}