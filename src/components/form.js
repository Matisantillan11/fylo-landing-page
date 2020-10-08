import React, {Component} from 'react'

import './styles/form.css'

class Form extends Component{
    render(){
        return(
            <div>
                <div className="form">
                    <h3>Get early access today</h3>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                    questions, our support team would be happy to help you.</p>
                    <div className="form--buttons">
                        <input type="text" placeholder="email@example.com"/>
                        <button>Get Started For Free</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form