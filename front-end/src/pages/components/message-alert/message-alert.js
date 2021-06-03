import React, {Component} from 'react';
import './message-alert.css'
import './checkmark.css'
import './errormark.css'
import './warningmark.css'

export default class MessageAlert extends Component{


    render(){
        return this.props.alert &&
        (
            <div className={"message-box"}> 

                {this.props.type === 'success' &&
                <div class="success-checkmark">
                <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                </div>
                </div>}

                {this.props.type === 'error' &&
                <div class="error-banmark">
                <div class="ban-icon">
                  <span class="icon-line-error line-long-invert"></span>
                  <span class="icon-line-error line-long-error"></span>
                  <div class="icon-circle-error"></div>
                  <div class="icon-fix-error"></div>
                </div>
                </div>} 

                {this.props.type === 'warning' &&
                <div class="error-banmark-warning">
                <div class="ban-icon-warning">
                  <span class="icon-line-error-warning line-long-invert-warning"></span>
                  <span class="icon-line-error-warning line-long-error-warning"></span>
                  <div class="icon-circle-error-warning"></div>
                  <div class="icon-fix-error-warning"></div>
                </div>
                </div>} 

                
                <p className="message-txt"> {this.props.message} </p>

                <button className="message-button" onClick={this.props.onOK} okFunction={this.props.okFunction}> OK </button>
            </div>
        ) 
    }

}
