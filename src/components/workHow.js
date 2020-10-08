
import React, { Component } from 'react';
import Arrow from '../images/icon-arrow.svg'
import Productive from '../images/illustration-stay-productive.png'
import './styles/workHow.css'
class WorkHow extends Component{
    render(){
        return(
            <div className="workHow">
                <div >
                    <img className="workHow__images" src={Productive} alt=""/>
                </div>
                <div className="workHow__texts"> 
                    <h4 className="workHow__title">Stay productive, wherever you are</h4>
                    <p className="workHow__body">Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                    storage needs.</p>
                    <p className="workHow__body">Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                    attachments required.</p>
                </div>
                <div className="workHow__container">
                    <a className="workHow__link"href="/">See how Fylo works <img className="workHow__img"src={Arrow} alt="Arrow"/> </a>
                    
                </div>
            </div>
            
        )
    }
}

export default WorkHow;