import React, {Component} from 'react'

import Quotes from '../images/bg-quotes.png'
import Author1 from '../images/profile-1.jpg'
import Author2 from '../images/profile-2.jpg'
import Author3 from '../images/profile-3.jpg'

import './styles/comments.css'
class Comments extends Component{
    render(){
        return(
            <div>
                
                <div className="comments">
                    <img className="quotes" src={Quotes} alt="quotes img"/>
                    <div className="comments__card">
                        <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className="author__container">
                            <img className="author__img"src={Author1} alt="Satish Patel"/>
                            <div className="author__description">
                                <p className="author__description--name">Satish Patel</p>
                                <p className="author__description--job">Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className="comments__card">
                        <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className="author__container">
                            <img className="author__img"src={Author2} alt="Bruce McKenzie"/>
                            <div className="author__description">
                                <p className="author__description--name">Bruce McKenzie</p>
                                <p className="author__description--job">Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className="comments__card">
                        <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className="author__container">
                            <img className="author__img"src={Author3} alt="Iva Boyd"/>
                            <div className="author__description">
                                <p className="author__description--name">Iva Boyd</p>
                                <p className="author__description--job">Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments