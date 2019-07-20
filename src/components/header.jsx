import React from 'react';
import logo from '../images/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="head">
                <img src={logo} align="middle" alt="logo" width="50"/>
                <span style={{fontSize:'1.8em',fontWeight:'bold',color:'white'}}>ToDo App</span>
            </div>
        )
    }
}

export default Header ;