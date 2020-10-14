import { render } from '@testing-library/react'
import React from 'react'

import './styles/footer.css'
function FooterList () {
    return(
        <div>
            <div className="list__container">
                <ul className ="footer__list">
                    <li className="footer__list--item">Abour Us</li>
                    <li className="footer__list--item">Jobs</li>
                    <li className="footer__list--item">Press</li>
                    <li className="footer__list--item">Blog</li>
                </ul>
                <ul className ="footer__list">
                    <li className="footer__list--item">Contact Us</li>
                    <li className="footer__list--item">Terms</li>
                    <li className="footer__list--item">Privacy</li>
                </ul>
            </div>
        </div>
    )
}
export default FooterList