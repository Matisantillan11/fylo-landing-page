import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Computer from '../images/icon-access-anywhere.svg'
import Files from '../images/icon-any-file.svg'
import Security from '../images/icon-security.svg'
import Collab from '../images/icon-collaboration.svg'

import './styles/services.css'


import WorkHow from './workHow'
import Comments from './comments'

function ServicesItems(){
    return(
        <div className="services">
            <div className="service__card">
                <img className="service__card--img" src={Computer} alt=""/>
                <h4 className="service__card--title">Access your files, anywhere</h4>
                <p className="service__card--subtitle">The ability to use a smartphone, tablet, or computer to access your account means your 
                files follow you everywhere.</p>
            </div>
            <div className="service__card">
                <img className="service__card--img" src={Security} alt=""/>
                <h4 className="service__card--title">Security you can trust</h4>
                <p className="service__card--subtitle">2-factor authentication and user-controlled encryption are just a couple of the security 
                features we allow to help secure your files.</p>
            </div>
            <div className="service__card">
                <img src={Collab}   alt=""/>
                <h4 className="service__card--title">Real-time collaboration</h4>
                <p className="service__card--subtitle">Securely share files and folders with friends, family and colleagues for live collaboration. 
                No email attachments required.</p>
            </div>
            <div className="service__card">
                <img className="service__card--img"src={Files}alt=""/>
                <h4 className="service__card--title">Store any type of file</h4>
                <p className="service__card--subtitle">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                file types to be securely stored and shared.</p>
            </div>

            <WorkHow />

            <Comments/>
        </div>
    )
}

class Services extends Component{
    render(){
        return(
            <div >
                <ServicesItems />
            </div>
        )
    }
}
export default Services