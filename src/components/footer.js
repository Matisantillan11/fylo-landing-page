import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../images/logo.svg'
import Location from '../images/icon-location.svg'
import Phone from '../images/icon-phone.svg'
import Email from '../images/icon-email.svg'

import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'

import FooterList from '../components/footerList'

import './styles/footer.css'
class Footer extends Component {
    render(){
        return(
            <div>
                <div className="footer">
                    <img src={Logo} alt=""/>
                    <div className="footer__container--text">
                        <div className="info__container">
                            <img src={Location} alt="Location"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</p>
                        </div>
                        <div className="info__container">
                            <img className="info__container--img" src={Phone} alt="Location"/>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className="info__container">
                            <img className="info__container--img" src={Email} alt="Location"/>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <FooterList />
                    <div className="social__container">
                    
                    </div>
                </div>

               
            </div>
            )
    }
}

export default Footer