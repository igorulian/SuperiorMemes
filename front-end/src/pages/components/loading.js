import React, {Component} from 'react';
import ReactLoading from 'react-loading'

export default class Loading extends Component{


    render(){
        return this.props.isLoading
        ? 
        (
            <div style={{position: 'absolute', marginRight: 'auto', marginLeft: 'auto', left: 0, right: 0, width: '10%', height: '10%', marginTop:'300px'}}>
                <ReactLoading type={'bubbles'} color={'#faf601'} height={'100%'} width={'100%'} />
            </div>
        ) 
        : 
        (
            <>
            </>
        )
    }

}