import React from 'react';
import lightOff from '../images/download.jpg'
import lightOn from '../images/lightOn.jpg'


export default class Test extends React.Component{
    constructor(){
        super();
        this.state ={
            blub:false
        }
    }
        render(){
            let {blub} = this.state
            console.log(blub)
            return(
                <div>
                    <h1>Test</h1>
                    <img src={blub ? lightOn : lightOff} alt=""/>
                    <button onClick={()=>this.setState({blub : !blub})}>
                    {blub ? "lightOff" : "lightOn"}
                    </button>
                </div>
            )
    }
}