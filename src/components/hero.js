import React, {Component} from 'react'


import HeroImage from '../images/illustration-intro.png'
import './styles/hero.css'

class Hero extends Component{
    render(){
        return(
            <div>
                <div className="hero container">
                    <img src={HeroImage} alt=""/>
                    <div className="hero__container--texts">
                        <h2>All your files in one secure location, accessible anywhere.</h2>
                        <p className="hero__subtitle">Fylo stores all your most important files in one secure location. Access them wherever 
                        you need, share and collaborate with friends family, and co-workers.</p>
                        <button className="getStarted__button">Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero

