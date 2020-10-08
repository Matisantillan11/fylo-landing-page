import React, {Component} from 'react'

import Logo from '../images/logo.svg'

import RightList from '../components/RightList'
import './styles/navBar.css'


class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <img src={Logo} alt="Logo"/>
                    <RightList />
                </div>
            </div>
        )
    }
}
export default Navbar;